import { useState } from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'

const mediaTypes = [
  'DVD / Blu-ray',
  'MiniDV Tape',
  'VHS Tape',
  '8mm Film',
  'Super 8 Film',
  'Audio Cassette',
  'Vinyl Record',
  'Other',
]

const deliveryOptions = [
  { value: 'cloud', label: 'Cloud Download' },
  { value: 'usb', label: 'USB Drive (+$15)' },
  { value: 'both', label: 'Both (+$15)' },
]

const initialForm = {
  name: '',
  email: '',
  phone: '',
  mediaTypes: [],
  quantity: '',
  instructions: '',
  delivery: 'cloud',
}

export default function Order() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  function handleMediaToggle(type) {
    setForm((prev) => ({
      ...prev,
      mediaTypes: prev.mediaTypes.includes(type)
        ? prev.mediaTypes.filter((t) => t !== type)
        : [...prev.mediaTypes, type],
    }))
    setErrors((prev) => ({ ...prev, mediaTypes: '' }))
  }

  function validate() {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required.'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'A valid email is required.'
    if (form.mediaTypes.length === 0) errs.mediaTypes = 'Please select at least one media type.'
    if (!form.quantity.trim()) errs.quantity = 'Please enter an estimated quantity.'
    return errs
  }

  function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
    setForm(initialForm)
  }

  if (submitted) {
    return (
      <div className="py-24 px-4 flex items-center justify-center bg-white min-h-[60vh]">
        <div className="max-w-md w-full bg-slate-50 rounded-2xl p-10 text-center border border-slate-100 shadow-sm">
          <BsCheckCircleFill className="text-6xl text-amber-500 mx-auto mb-4" />
          <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Order Received!</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            Thanks for reaching out! We&apos;ll review your request and send you a detailed quote and shipping instructions within 1 business day.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-6 py-3 rounded-xl transition-colors"
          >
            Submit Another Order
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-3">Get a Free Quote</h1>
          <p className="text-slate-500">Fill out the form below and we&apos;ll get back to you within 1 business day with pricing and shipping details.</p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col gap-6">
          {/* Contact Info */}
          <fieldset className="flex flex-col gap-4">
            <legend className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Contact Information</legend>

            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">Full Name *</label>
              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Smith"
                className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 ${errors.name ? 'border-red-400' : 'border-slate-300'}`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">Email Address *</label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="jane@example.com"
                className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 ${errors.email ? 'border-red-400' : 'border-slate-300'}`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1">Phone Number <span className="font-normal text-slate-400">(optional)</span></label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="(555) 000-0000"
                className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
          </fieldset>

          {/* Media Types */}
          <fieldset className="flex flex-col gap-3">
            <legend className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Media Types *</legend>
            <p className="text-xs text-slate-500">Select all that apply</p>
            <div className="grid grid-cols-2 gap-2">
              {mediaTypes.map((type) => {
                const checked = form.mediaTypes.includes(type)
                return (
                  <label
                    key={type}
                    className={`flex items-center gap-2 cursor-pointer border rounded-lg px-3 py-2 text-sm transition-colors ${
                      checked ? 'bg-amber-50 border-amber-400 text-amber-700 font-semibold' : 'bg-white border-slate-200 text-slate-700'
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="accent-amber-500"
                      checked={checked}
                      onChange={() => handleMediaToggle(type)}
                    />
                    {type}
                  </label>
                )
              })}
            </div>
            {errors.mediaTypes && <p className="text-red-500 text-xs mt-1">{errors.mediaTypes}</p>}
          </fieldset>

          {/* Quantity */}
          <div>
            <label htmlFor="quantity" className="block text-sm font-semibold text-slate-700 mb-1">Estimated Quantity *</label>
            <input
              id="quantity"
              type="text"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              placeholder="e.g. 12 VHS tapes, 3 film reels"
              className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 ${errors.quantity ? 'border-red-400' : 'border-slate-300'}`}
            />
            {errors.quantity && <p className="text-red-500 text-xs mt-1">{errors.quantity}</p>}
          </div>

          {/* Delivery Method */}
          <fieldset className="flex flex-col gap-2">
            <legend className="text-sm font-bold text-slate-700 mb-1">Delivery Method</legend>
            {deliveryOptions.map((opt) => (
              <label key={opt.value} className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                <input
                  type="radio"
                  name="delivery"
                  value={opt.value}
                  checked={form.delivery === opt.value}
                  onChange={handleChange}
                  className="accent-amber-500"
                />
                {opt.label}
              </label>
            ))}
          </fieldset>

          {/* Special Instructions */}
          <div>
            <label htmlFor="instructions" className="block text-sm font-semibold text-slate-700 mb-1">Special Instructions <span className="font-normal text-slate-400">(optional)</span></label>
            <textarea
              id="instructions"
              name="instructions"
              value={form.instructions}
              onChange={handleChange}
              rows={4}
              placeholder="Any special requests, condition notes, or questions..."
              className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-extrabold py-3 rounded-xl text-base transition-colors shadow-md"
          >
            Submit Order Request
          </button>

          <p className="text-xs text-slate-400 text-center">
            We&apos;ll email you a detailed quote within 1 business day. No payment required now.
          </p>
        </form>
      </div>
    </div>
  )
}
