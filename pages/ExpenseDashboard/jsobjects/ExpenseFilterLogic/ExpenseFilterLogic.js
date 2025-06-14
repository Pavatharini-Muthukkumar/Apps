export default {
  getFilters() {
    const year = YearInput?.text || "2025";
    const timeUnit = TimeUnitSelector?.selectedOptionValue || "month";

    return {
      year,
      timeUnit,
      month: MonthDropdown?.selectedOptionValue || "01",
      quarter: QuarterDropdown?.selectedOptionValue || "Q1",
      week: WeekDropdown?.selectedOptionValue || "01"
    };
  }
}
