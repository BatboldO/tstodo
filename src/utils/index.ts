interface Status {
    [key: string]: string;
  }
  
  export const status: Status = {
    high: "error",
    medium: "warning",
    low: "success",
  };