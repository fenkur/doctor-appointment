'use client';
import React from 'react';
import { Form, Input, message } from 'antd';
import Link from 'next/link';

const Register = () => {
  const onFinishHandler = async (values: any) => {
    console.log(values);
    message.success("Registration successful!");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100 px-4 py-8">
      <div className="w-full max-w-sm bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h1 className="text-2xl font-light text-gray-800 mb-1">Create Account</h1>
          <p className="text-sm text-gray-500">Join us today</p>
        </div>

        <Form layout="vertical" onFinish={onFinishHandler} className="space-y-1">
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Name required' }]}
            className="mb-6"
          >
            <div className="relative group">
              <Input 
                placeholder="Full Name" 
                className="h-12 rounded-xl border-0 bg-gray-50 hover:bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-gray-700 placeholder-gray-400"
              />
            </div>
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Email required' },
              { type: 'email', message: 'Invalid email' }
            ]}
            className="mb-6"
          >
            <div className="relative group">
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="h-12 rounded-xl border-0 bg-gray-50 hover:bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-gray-700 placeholder-gray-400"
              />
            </div>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Password required' },
              { min: 6, message: 'Minimum 6 characters' }
            ]}
            className="mb-8"
          >
            <div className="relative group">
              <Input.Password 
                placeholder="Password" 
                className="h-12 rounded-xl border-0 bg-gray-50 hover:bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-gray-700 placeholder-gray-400"
              />
            </div>
          </Form.Item>

          <button
            type="submit"
            className="w-full h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
          >
            Create Account
          </button>
        </Form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="px-3 text-xs text-gray-400 font-medium">OR</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Login Link */}
        <div className="text-center">
          <span className="text-sm text-gray-500">Already have an account? </span>
          <Link 
            href="/login" 
            className="text-sm font-medium text-blue-600 hover:text-purple-600 transition-colors duration-200"
          >
            Sign In
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Register;