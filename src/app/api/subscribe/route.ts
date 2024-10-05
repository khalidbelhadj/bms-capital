export async function POST(req: Request) {
  const json = await req.json();
  const email = json.email;
  if (!email) return new Response(`"email-required"`, { status: 400 });

  try {
    const res = await fetch(
      `https://${process.env.MC_SERVER}.api.mailchimp.com/3.0/lists/${process.env.MC_LIST_ID}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `anystring ${process.env.MC_API_KEY}`,
        },
        body: JSON.stringify({
          email_address: email,
          email_type: "html",
          status: "subscribed",
          merge_fields: {},
          interests: {},
          language: "",
          vip: false,
          location: { latitude: 0, longitude: 0 },
          marketing_permissions: [],
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "",
          timestamp_opt: "",
          tags: [],
        }),
      }
    );
    const json = await res.json();

    if (json.title === "Member Exists")
      return new Response(`"member-exists"`, { status: 409 });

    if (res.status >= 400) throw new Error(json.title);
  } catch (error: unknown) {
    return new Response((error as { message: string })["message"], {
      status: 500,
    });
  }

  return new Response(`"success"`, { status: 200 });
}
