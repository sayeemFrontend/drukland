import { FormEvent } from 'react';

export function getFormData(formElement: HTMLFormElement) {
  const formData = new FormData(formElement);
  const data: any = {};
  for (const [k, v] of formData.entries()) {
    data[k] = v;
  }
  return data;
}
