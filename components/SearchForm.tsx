import { useRouter } from "next/router";
import React, { ChangeEvent, FormEvent, useState } from "react";

export default function SearchForm({ initialValue = "" }) {
  const [value, setValue] = useState<string>(initialValue);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!value) {
      router.push("/");
      return;
    }
    router.push(`/search?keyword=${value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="keyword" value={value} onChange={handleChange} />
      <button>검색</button>
    </form>
  );
}
