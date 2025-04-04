export class ValidatorService {
  static minCharacters(value: string, min: number) {
    if (!value || value.length < min) {
      return `* Minimum ${min} characters`;
    }
    return "";
  }

  static maxCharacters(value: string, max: number) {
    if (!value || value.length > max) {
      return `* Maximum ${max} characters`;
    }
    return "";
  }

  static isRequired(value: string | boolean | number) {
    if (value === undefined || value === null || value === "") {
      return `* Field is required`;
    }
    return "";
  }

  static cantBeZero(value: number) {
    if (value === 0) {
      return `* Can't be 0`;
    }
    return "";
  }

  static cantBeLowerOrEqualThan(value: number, max: number) {
    if (value <= max) {
      return `* Can't be lower or equal than ${max}`;
    }
    return "";
  }
}
