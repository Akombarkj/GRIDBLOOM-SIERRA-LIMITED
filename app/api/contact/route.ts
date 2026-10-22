import type { NextRequest } from "next/server";
import { saveLead } from "../../../lib/leadStorage";

export const runtime = "nodejs";

const requiredFields = [
  "firstName",
  "lastName",
  "phone",
  "community",
  "connectionType",
  "load",
  "message",
] as const;

function getBodyValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json().catch(() => ({}))) as Record<string, unknown>;
    const submission = {
      firstName: getBodyValue(payload.firstName),
      lastName: getBodyValue(payload.lastName),
      phone: getBodyValue(payload.phone),
      community: getBodyValue(payload.community),
      connectionType: getBodyValue(payload.connectionType),
      load: getBodyValue(payload.load),
      message: getBodyValue(payload.message),
    };

    const missingFields = requiredFields.filter((field) => !submission[field]);

    if (missingFields.length > 0) {
      return Response.json(
        {
          message: `Please complete the required field(s): ${missingFields.join(", ")}.`,
        },
        { status: 400 }
      );
    }

    if (!/^\+?[0-9()\-\s]{7,}$/.test(submission.phone)) {
      return Response.json(
        { message: "Please enter a valid phone number." },
        { status: 400 }
      );
    }

    await saveLead(submission);

    return Response.json({
      success: true,
      message: "Your connection request has been received. Our team will be in touch soon.",
    });
  } catch {
    return Response.json(
      {
        message: "Something went wrong while submitting your request. Please try again later.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return Response.json({
    success: true,
    message: "Contact API ready",
  });
}
