import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Calendar,
  Clock,
  Users,
  Phone,
  Mail,
  User,
  MessageSquare,
  ArrowLeft,
} from "lucide-react";
import { supabase } from "../integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import "../App.css";

const reservationSchema = z.object({
  user_name: z.string().min(2, "Name must be at least 2 characters"),
  user_email: z.string().email("Please enter a valid email"),
  user_phone: z.string().min(10, "Please enter a valid phone number"),
  party_size: z.string().min(1, "Please select party size"),
  reservation_date: z.string().min(1, "Please select a date"),
  reservation_time: z.string().min(1, "Please select a time"),
  special_requests: z.string().optional(),
});

const timeSlots = [
  "11:00","11:30","12:00","12:30","13:00","13:30",
  "14:00","14:30","15:00","15:30","16:00","16:30",
  "17:00","17:30","18:00","18:30","19:00","19:30",
  "20:00","20:30","21:00","21:30","22:00",
];

const partySizes = Array.from({ length: 20 }, (_, i) => i + 1);

const Booking = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      user_name: "",
      user_email: "",
      user_phone: "",
      party_size: "",
      reservation_date: "",
      reservation_time: "",
      special_requests: "",
    },
  });

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setToast(null);

    try {
      const { error } = await supabase.from("reservations").insert({
        user_name: data.user_name,
        user_email: data.user_email,
        user_phone: data.user_phone,
        party_size: parseInt(data.party_size),
        reservation_date: data.reservation_date,
        reservation_time: data.reservation_time,
        special_requests: data.special_requests || null,
      });

      if (error) throw error;

      setToast({
        type: "success",
        message: "🎉 Reservation Confirmed! We'll contact you shortly.",
      });
      form.reset();
    } catch (error) {
      setToast({
        type: "error",
        message: "❌ Failed to submit reservation. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div
      className="booking-page relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "97%",
      }}
    >
      <div
        className="absolute inset-0"
        style={{ background: "rgba(255, 255, 255, 0.6)" }}
      ></div>

      <div
        className="booking-container relative z-10"
        style={{
          maxWidth: "600px",
          width: "100%",
          background: "rgba(255,255,255,0.9)",
          borderRadius: "16px",
          padding: "30px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
          backdropFilter: "blur(6px)",
          position: "relative",
        }}
      >
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            background: "#902022",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <ArrowLeft size={20} />
        </button>

        {/* Header Section */}
        <div className="booking-header" style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "2rem", color: "#902022", fontWeight: "bold" }}>
            🍽 Book A Table
          </h1>
          <p style={{ color: "#444", marginTop: "8px" }}>
            Reserve your spot and enjoy our finest dishes.
          </p>
        </div>

        {/* Toast Message */}
        {toast && (
          <div
            style={{
              marginTop: "15px",
              padding: "12px",
              borderRadius: "8px",
              textAlign: "center",
              fontWeight: "bold",
              background: toast.type === "success" ? "#FF9D2E" : "#902022",
              color: "#fff",
            }}
          >
            {toast.message}
          </div>
        )}

        {/* Reservation Form */}
        <div className="booking-form-card" style={{ marginTop: "25px" }}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="booking-form"
            style={{ display: "grid", gap: "18px" }}
          >
            {/* Name + Email */}
            <div
              className="form-row"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
            >
              <div className="form-group">
                <label style={{ color: "#902022", fontWeight: "500" }}>
                  <User size={16} /> Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  {...form.register("user_name")}
                  style={inputStyle}
                />
                <p className="error">{form.formState.errors.user_name?.message}</p>
              </div>

              <div className="form-group">
                <label style={{ color: "#902022", fontWeight: "500" }}>
                  <Mail size={16} /> Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  {...form.register("user_email")}
                  style={inputStyle}
                />
                <p className="error">{form.formState.errors.user_email?.message}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="form-group">
              <label style={{ color: "#902022", fontWeight: "500" }}>
                <Phone size={16} /> Phone
              </label>
              <input
                type="tel"
                placeholder="+1 555 123 4567"
                {...form.register("user_phone")}
                style={inputStyle}
              />
              <p className="error">{form.formState.errors.user_phone?.message}</p>
            </div>

            {/* Party Size + Date + Time */}
            <div
              className="form-row"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}
            >
              <div className="form-group">
                <label style={{ color: "#902022", fontWeight: "500" }}>
                  <Users size={16} /> Guests
                </label>
                <select {...form.register("party_size")} style={inputStyle}>
                  <option value="">Select</option>
                  {partySizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label style={{ color: "#902022", fontWeight: "500" }}>
                  <Calendar size={16} /> Date
                </label>
                <input
                  type="date"
                  min={today}
                  {...form.register("reservation_date")}
                  style={inputStyle}
                />
              </div>

              <div className="form-group">
                <label style={{ color: "#902022", fontWeight: "500" }}>
                  <Clock size={16} /> Time
                </label>
                <select {...form.register("reservation_time")} style={inputStyle}>
                  <option value="">Select</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Special Requests */}
            <div className="form-group">
              <label style={{ color: "#902022", fontWeight: "500" }}>
                <MessageSquare size={16} /> Special Requests
              </label>
              <textarea
                rows={3}
                placeholder="Any notes..."
                {...form.register("special_requests")}
                style={inputStyle}
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                background: "#902022",
                color: "#fff",
                padding: "12px 20px",
                borderRadius: "8px",
                border: "none",
                fontSize: "1rem",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              {isSubmitting ? "Submitting..." : "Confirm Reservation"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// ✅ Shared input styles
const inputStyle = {
  width: "88%",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  background: "#fff",
  color: "#333",
  fontSize: "0.95rem",
  marginTop: "4px",
};

export default Booking;