import { $host } from "./index";

const findInfoUser = async (formData) => {
  const { data } = await $host.post(`api/v1/user/send/email`, formData);
  return data;
};

export { findInfoUser };
