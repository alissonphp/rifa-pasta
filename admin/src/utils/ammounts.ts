import { Ticket } from "types/Reserve";

const TICKET_PRICE = 30.0;
const PARTNER_COMMISSION = 20.0;

export const TotalReserveAmmount = (tickets: Ticket[]) => {
  return tickets.length * TICKET_PRICE;
};

export const TotalPartnerCommission = (tickets: Ticket[]) => {
  return tickets.length * PARTNER_COMMISSION;
};
