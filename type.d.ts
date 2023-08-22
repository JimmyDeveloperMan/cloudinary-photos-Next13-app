export type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};
export type SearchResult = {
  public_id: string;
  secure_url:string
};
