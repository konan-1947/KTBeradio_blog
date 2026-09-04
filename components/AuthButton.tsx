"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type AuthButtonProps = {
  userName: string | null;
};

export function AuthButton({ userName }: AuthButtonProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
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

  function changeMode(nextMode: "login" | "signup") {
    setMode(nextMode);
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

    const supabase = createClient();
    if (mode === "signup") {
      if (!name.trim()) {
        setError("Vui lòng nhập tên hiển thị.");
        setLoading(false);
        return;
      }

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
        setOpen(false);
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
      setOpen(false);
      router.refresh();
    }

    setLoading(false);
  }

  async function signOut() {
    setLoading(true);
    const supabase = createClient();
    await supabase.auth.signOut();
    router.refresh();
    setLoading(false);
  }

  if (userName) {
    return (
      <div className="auth-status">
        <Link className="auth-user-name profile-header-link" href="/profile" title="Mở hồ sơ cá nhân">
          {userName}
        </Link>
        <button className="logout-button" onClick={signOut} disabled={loading}>
          {loading ? "..." : "Đăng xuất"}
        </button>
      </div>
    );
  }

  return (
    <div className="auth-control">
      <button
        className="login-button"
        onClick={() => {
          setOpen((current) => !current);
          resetFeedback();
        }}
        aria-expanded={open}
      >
        Đăng nhập
      </button>
      {open ? (
        <div className="auth-panel">
          <div className="auth-panel-heading">
            {mode === "login" ? "Đăng nhập" : "Tạo tài khoản"}
          </div>
          <form className="auth-form" onSubmit={submit}>
            {mode === "signup" ? (
              <label>
                Tên hiển thị
                <input value={name} onChange={(event) => setName(event.target.value)} required />
              </label>
            ) : null}
            <label>
              Email Gmail
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="tenban@gmail.com"
                required
              />
            </label>
            <label>
              Mật khẩu
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                minLength={6}
                required
              />
            </label>
            {error ? <p className="auth-error">{error}</p> : null}
            {message ? <p className="auth-message">{message}</p> : null}
            <button className="auth-submit" type="submit" disabled={loading}>
              {loading ? "Đang xử lý..." : mode === "login" ? "Đăng nhập" : "Đăng ký"}
            </button>
          </form>
          <button
            className="auth-mode-toggle"
            type="button"
            onClick={() => changeMode(mode === "login" ? "signup" : "login")}
          >
            {mode === "login" ? "Chưa có tài khoản? Đăng ký" : "Đã có tài khoản? Đăng nhập"}
          </button>
        </div>
      ) : null}
    </div>
  );
}
