<script setup lang="ts">
import { ref, reactive } from 'vue';

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const submitStatus = ref<'idle' | 'success' | 'error'>('idle');

const socialLinks = [
  {
    name: 'GitHub',
    icon: '🔗',
    url: 'https://github.com/MohabMohamed72',
    color: 'gray',
    handle: '@MohabMohamed72'
  },
  {
    name: 'LinkedIn',
    icon: '💼',
    url: 'https://www.linkedin.com/in/mohab-mohamed-a5121024b/',
    color: 'blue',
    handle: '/in/MohabMohamed'
  },
//   {
//     name: 'Twitter',
//     icon: '🐦',
//     url: 'https://twitter.com/yourusername',
//     color: 'cyan',
//     handle: '@yourusername'
//   },
  {
    name: 'Email',
    icon: '✉️',
    url: 'mailto:mohabmohamedd772@gmail.com',
    color: 'red',
    handle: 'mohabmohamedd772@gmail.com'
  }
];

const contactInfo = [
  {
    icon: '📍',
    label: 'Location',
    value: 'El Mansoura, Egypt',
    color: 'emerald'
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'mohabmohamedd772@gmail.com',
    color: 'blue'
  },
  {
    icon: '📱',
    label: 'Phone',
    value: '+20 100 759 9123',
    color: 'purple'
  },
  {
    icon: '⏰',
    label: 'Response Time',
    value: 'Within 24 hours',
    color: 'orange'
  }
];

const handleSubmit = async () => {
  isSubmitting.value = true;
  
  // Simulate API call
  setTimeout(() => {
    isSubmitting.value = false;
    submitStatus.value = 'success';
    
    // Reset form
    Object.keys(formData).forEach(key => {
      formData[key as keyof typeof formData] = '';
    });
    
    // Reset status after 3 seconds
    setTimeout(() => {
      submitStatus.value = 'idle';
    }, 3000);
  }, 2000);
};
</script>

<template>
  <div class="contact-container">
    <!-- Animated background -->
    <div class="bg-orb orb-1"></div>
    <div class="bg-orb orb-2"></div>
    <div class="bg-orb orb-3"></div>
    <div class="bg-grid"></div>

    <div class="contact-content">
      <!-- Header Section -->
      <div class="contact-header">
        <div class="header-badge">
          <span class="badge-icon">💬</span>
          <span class="badge-text">Get In Touch</span>
        </div>
        <h1 class="contact-title">Let's Work Together</h1>
        <p class="contact-subtitle">
          Have a project in mind or just want to chat? I'd love to hear from you. 
          Drop me a message and I'll get back to you as soon as possible.
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="contact-grid">
        <!-- Left Side - Contact Form -->
        <div class="form-section">
          <div class="form-card">
            <h2 class="form-title">Send a Message</h2>
            
            <form @submit.prevent="handleSubmit" class="contact-form">
              <div class="form-group">
                <label for="name" class="form-label">
                  <span class="label-icon">👤</span>
                  Your Name
                </label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  class="form-input"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div class="form-group">
                <label for="email" class="form-label">
                  <span class="label-icon">✉️</span>
                  Email Address
                </label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  class="form-input"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div class="form-group">
                <label for="subject" class="form-label">
                  <span class="label-icon">📝</span>
                  Subject
                </label>
                <input
                  id="subject"
                  v-model="formData.subject"
                  type="text"
                  class="form-input"
                  placeholder="Project Inquiry"
                  required
                />
              </div>

              <div class="form-group">
                <label for="message" class="form-label">
                  <span class="label-icon">💭</span>
                  Message
                </label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  class="form-textarea"
                  placeholder="Tell me about your project..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                class="submit-button"
                :class="{ submitting: isSubmitting, success: submitStatus === 'success' }"
                :disabled="isSubmitting"
              >
                <span v-if="!isSubmitting && submitStatus === 'idle'" class="button-content">
                  <span>Send Message</span>
                  <svg class="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                  </svg>
                </span>
                <span v-else-if="isSubmitting" class="button-content">
                  <span class="spinner"></span>
                  <span>Sending...</span>
                </span>
                <span v-else class="button-content">
                  <span>✓ Message Sent!</span>
                </span>
                <span class="button-glow"></span>
              </button>
            </form>
          </div>
        </div>

        <!-- Right Side - Contact Info & Social -->
        <div class="info-section">
          <!-- Contact Information -->
          <div class="info-card">
            <h3 class="info-title">Contact Information</h3>
            <div class="info-list">
              <div 
                v-for="(info, index) in contactInfo" 
                :key="index"
                class="info-item"
                :style="{ '--delay': index * 0.1 + 's' }"
              >
                <div class="info-icon" :class="`icon-${info.color}`">
                  <span>{{ info.icon }}</span>
                </div>
                <div class="info-content">
                  <p class="info-label">{{ info.label }}</p>
                  <p class="info-value">{{ info.value }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="social-card">
            <h3 class="social-title">Connect With Me</h3>
            <div class="social-grid">
              <a
                v-for="(social, index) in socialLinks"
                :key="index"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="social-link"
                :class="`social-${social.color}`"
                :style="{ '--delay': index * 0.1 + 's' }"
              >
                <div class="social-icon">
                  <span>{{ social.icon }}</span>
                </div>
                <div class="social-content">
                  <p class="social-name">{{ social.name }}</p>
                  <p class="social-handle">{{ social.handle }}</p>
                </div>
                <svg class="social-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Availability Badge -->
          <div class="availability-card">
            <div class="availability-pulse">
              <span class="pulse-dot"></span>
              <span class="pulse-ring"></span>
            </div>
            <div class="availability-content">
              <h4 class="availability-title">Currently Available</h4>
              <p class="availability-text">Open to new projects and collaborations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>