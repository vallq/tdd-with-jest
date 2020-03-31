const convertTime = require("./convertTime");

describe("convertTime", () => {
  it("should return house min seconds without am or pm", () => {
    expect(convertTime("10:00:00 AM")).toBe("10:00:00");
    expect(convertTime("11:59:59 AM")).toBe("11:59:59");
  });

  it("should return 00 hour for 12 AM", () => {
    expect(convertTime("12:00:00 AM")).toBe("00:00:00");
    expect(convertTime("12:59:59 AM")).toBe("00:59:59");
  });

  it("should return 11:59:59 when time is 11:59:59 AM", () => {
    expect(convertTime("11:59:59 AM")).toBe("11:59:59");
  });

  it("should return 01:00:00 when time is 1:00:00 AM", () => {
    expect(convertTime("1:00:00 AM")).toBe("01:00:00");
  });

  it("should return 13:00:00 when time is 1:00:00 PM", () => {
    expect(convertTime("1:00:00 PM")).toBe("13:00:00");
  });
});
