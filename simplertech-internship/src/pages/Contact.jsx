
import React from 'react';
import UserCard from '../components/UserCard';

export default function Contact() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Contact Us</h2>
      <p>If you’d like to work with us or have any questions, we’d love to hear from you.</p>

      <div style={{ marginTop: '2rem' }}>
        <UserCard name="Support Team" email="support@simpler.com" />
        <UserCard name="Business Inquiries" email="business@simpler.com" />
        <UserCard name="Careers" email="careers@simpler.com" />
      </div>
    </div>
  );
}
