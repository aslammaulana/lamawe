import type {
  ContactChannelItem,
  OperatingHourItem,
  EmergencyContactItem,
} from "../types";

export const directChannelsData: ContactChannelItem[] = [
  {
    title: "Kirim Pesan WhatsApp Resmi",
    subtitle: "Respon cepat loket 08.30 - 15.30 WIB",
    href: "https://wa.me/628123456789",
    type: "wa",
  },
  {
    title: "Panggil Telepon Kantor Pelayanan",
    subtitle: "(0651) 7552-019 • Jam Dinas",
    href: "tel:+626517552019",
    type: "phone",
  },
  {
    title: "Surel Resmi PPID & Pelayanan",
    subtitle: "kontak@desa-lamawe.id",
    href: "mailto:kontak@desa-lamawe.id",
    type: "email",
  },
];

export const operatingHoursData: OperatingHourItem[] = [
  {
    day: "Senin – Kamis",
    time: "08.30 – 15.30 WIB",
    note: "Istirahat: 12.30 – 14.00 WIB",
  },
  {
    day: "Jumat Berkah",
    time: "08.30 – 11.30 WIB",
    note: "Tutup persiapan Shalat Jumat",
  },
  {
    day: "Sabtu – Minggu",
    time: "Loket Tutup",
    note: "Layanan daring 24 jam aktif",
    isClosed: true,
  },
];

export const officeLocationData = {
  name: "Kantor Keuchik Gampong Lam Awe",
  address:
    "Jl. Meulaboh - Banda Aceh KM 7.5, Gampong Lam Awe, Kecamatan Peukan Bada, Kabupaten Aceh Besar, Aceh.",
  landmark: "Samping Meunasah Lam Awe, ± 15 menit dari Kota Banda Aceh.",
  postalCode: "23351",
  regionCode: "11.06.08.2001",
  coordinates: "5°31'22.4\"N 95°17'46.2\"E",
  mapsQueryUrl: "https://maps.google.com/?q=Kantor+Keuchik+Gampong+Lam+Awe+Peukan+Bada",
  mapsDirectCoordsUrl: "https://maps.google.com/?q=5.522889,95.296167",
  mapImageUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAUbfsmpO5cLjB1_AJjRqFmVPZcIoS5K1SBgS3lh25Iy7xVfkdtu0Gk_b5RXb2RBuwZmaGFotqwpSO4utq1Dh7nkdbxy2aUsXv2l-utoL1yMtqK_QKJuxMKQJEhwPBck0HIYBbULReEhN8vgKlTlDk_6B-_Xhqz5ZdsAe63WWeIwjYDFFOqe8Eh61AS7W-N9zMAi2_yy--9bio-a5tKct3m1-8WHPlviYUw-bwWRSo0",
};

export const emergencyContactsData: EmergencyContactItem[] = [
  {
    label: "Pos Kamling & Bencana",
    role: "Koordinator Lapangan",
    phone: "0852-6011-XXXX",
    iconType: "shield",
  },
  {
    label: "Babinsa & Bhabin",
    role: "Polsek & Koramil",
    phone: "0813-7720-XXXX",
    iconType: "police",
  },
  {
    label: "Ambulans Siaga",
    role: "Driver Medis Siaga 24 Jam",
    phone: "0821-6900-XXXX",
    iconType: "ambulance",
  },
];

