export const inr = (amount) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(
    amount
  );

export const dmyDate = (date) =>
  new Intl.DateTimeFormat("en-IN").format(new Date(date));
