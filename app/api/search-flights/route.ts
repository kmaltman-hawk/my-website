import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const origin = searchParams.get("origin");
  const destination = searchParams.get("destination");
  const date = searchParams.get("date");

  if (!origin || !destination || !date) {
    return NextResponse.json(
      { error: "origin, destination, and date are required" },
      { status: 400 }
    );
  }

  const apiKey = process.env.SERPAPI_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Server is missing SERPAPI_KEY" },
      { status: 500 }
    );
  }

  const params = new URLSearchParams({
    engine: "google_flights",
    departure_id: origin,
    arrival_id: destination,
    outbound_date: date,
    type: "2", // one-way
    api_key: apiKey,
  });

  const response = await fetch(`https://serpapi.com/search.json?${params.toString()}`);
  if (!response.ok) {
    return NextResponse.json(
      { error: `SerpAPI request failed: ${response.status}` },
      { status: 502 }
    );
  }

  const data = await response.json();
  const flights = (data.best_flights || data.other_flights || []).map((flightGroup: any) => {
    const leg = flightGroup.flights[0];
    return {
      airline: leg.airline,
      departure_time: leg.departure_airport?.time,
      arrival_time: leg.arrival_airport?.time,
      duration_minutes: flightGroup.total_duration,
      price: flightGroup.price,
    };
  });

  return NextResponse.json({ flights });
}
