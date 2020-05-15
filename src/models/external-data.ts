export interface ClassDetail {
  subject_code: string;
  subject_desc: string;
  week_start_date: string;
  week_end_date: string;
  exact_class_date: string;
  day_of_week: string;
  room_number: string;
  room: string;
  gps_coordinates: string;
  start_time: string;
  end_time: string;
  campus_code: string;
  hasStandardRoomDescription: boolean;
  duration: number;
  duration_code: string;
  isHoliday: boolean;
}

export interface ExternalData {
  _id: any;
  student_id: string;
  class_details: ClassDetail[];
}