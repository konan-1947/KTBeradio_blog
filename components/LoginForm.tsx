"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function LoginForm() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  function resetFeedback() {
    setError(null);
    setMessage(null);
  }

  function switchMode() {
    setMode((current) => (current === "login" ? "signup" : "login"));
    resetFeedback();
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    resetFeedback();

    const normalizedEmail = email.trim().toLowerCase();
    if (!/^[^\s@]+@gmail\.com$/i.test(normalizedEmail)) {
      setError("Chỉ chấp nhận email có đuôi @gmail.com.");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Mật khẩu cần có ít nhất 6 ký tự.");
      setLoading(false);
      return;
    }

    if (mode === "signup" && !name.trim()) {
      setError("Vui lòng nhập tên hiển thị.");
      setLoading(false);
      return;
    }

    const supabase = createClient();
    if (mode === "signup") {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: normalizedEmail,
        password,
        options: {
          data: { full_name: name.trim() },
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (signUpError) {
        setError(signUpError.message);
      } else if (data.session) {
        router.push("/");
        router.refresh();
      } else {
        setMessage("Đăng ký thành công. Hãy kiểm tra Gmail để xác nhận tài khoản.");
      }

      setLoading(false);
      return;
    }

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: normalizedEmail,
      password,
    });

    if (signInError) {
      setError("Email hoặc mật khẩu không đúng.");
    } else {
      router.push("/");
      router.refresh();
    }

    setLoading(false);
  }

  return (
    <>
      <form className="login-form" onSubmit={submit}>
        {mode === "signup" ? (
          <label>
            Tên hiển thị
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Tên bạn trên diễn đàn"
              autoComplete="name"
              required
            />
          </label>
        ) : null}

        <label>
          Email Gmail
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="tenban@gmail.com"
            autoComplete="email"
            required
          />
        </label>

        <label>
          Mật khẩu
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Ít nhất 6 ký tự"
            autoComplete={mode === "login" ? "current-password" : "new-password"}
            minLength={6}
            required
          />
        </label>

        {error ? <p className="login-error" role="alert">{error}</p> : null}
        {message ? <p className="login-message" role="status">{message}</p> : null}

        <button className="login-submit" type="submit" disabled={loading}>
          {loading ? "Đang xử lý..." : mode === "login" ? "Đăng nhập ngay" : "Tạo tài khoản"}
        </button>
      </form>

      <button className="login-mode-toggle" type="button" onClick={switchMode}>
        {mode === "login" ? "Chưa có tài khoản? Đăng ký ngay" : "Đã có tài khoản? Đăng nhập"}
      </button>
    </>
  );
}
