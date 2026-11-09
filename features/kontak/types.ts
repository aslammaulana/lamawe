export interface ContactChannelItem {
  title: string;
  subtitle: string;
  href: string;
  type: "wa" | "phone" | "email";
}

export interface OperatingHourItem {
  day: string;
  time: string;
  note: string;
  isClosed?: boolean;
}

export interface EmergencyContactItem {
  label: string;
  role: string;
  phone: string;
  iconType: "shield" | "police" | "ambulance";
}

