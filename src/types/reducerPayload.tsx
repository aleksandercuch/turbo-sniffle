export type payloadProps = {
  title: string;
  category: string;
  desc: string;
  url: string;
  id: number;
};

export type actionProps = {
  type: string;
  payload: payloadProps;
};
