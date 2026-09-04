"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type ProfileFormProps = {
  initialDisplayName: string;
};

export function ProfileForm({ initialDisplayName }: ProfileFormProps) {
  const router = useRouter();
  const [displayName, setDisplayName] = useState(initialDisplayName);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextDisplayName = displayName.trim();

    setError(null);
    setMessage(null);

    if (!nextDisplayName) {
      setError("Vui lòng nhập tên hiển thị.");
      return;
    }

    setLoading(true);

    try {
      const supabase = createClient();
      const { error: updateError } = await supabase.auth.updateUser({
        data: { full_name: nextDisplayName },
      });

      if (updateError) {
        setError("Không thể cập nhật hồ sơ. Vui lòng thử lại.");
        return;
      }

      setDisplayName(nextDisplayName);
      setMessage("Hồ sơ đã được cập nhật.");
      router.refresh();
    } catch {
      setError("Không thể kết nối tới máy chủ. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="profile-form" onSubmit={submit}>
      <div className="profile-form-heading">
        <p>Thông tin tài khoản</p>
        <h2>Cập nhật hồ sơ</h2>
        <span>Tên hiển thị sẽ xuất hiện cùng các bài viết của bạn.</span>
      </div>

      {error ? <p className="profile-error" role="alert">{error}</p> : null}
      {message ? <p className="profile-message" role="status">{message}</p> : null}

      <label>
        Tên hiển thị
        <input
          value={displayName}
          onChange={(event) => setDisplayName(event.target.value)}
          autoComplete="name"
          required
        />
      </label>

      <button type="submit" disabled={loading}>
        {loading ? "Đang lưu..." : "Lưu thay đổi"}
      </button>
    </form>
  );
}
