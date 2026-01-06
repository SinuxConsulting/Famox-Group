import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Loader2, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { data } from '@/data';

const enquiryTypes = [
  { value: 'general', label: 'General Enquiry' },
  { value: 'quote_request', label: 'Request a Quote' },
  { value: 'training', label: 'Training & Consultancy' },
  { value: 'farm_setup', label: 'Farm Setup Services' },
  { value: 'partnership', label: 'Partnership Opportunity' },
  { value: 'support', label: 'After-Sales Support' },
];

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    enquiryType: 'general',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await data.enquiries.create({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      enquiryType: formData.enquiryType,
      message: formData.message,
    });

    setIsSubmitting(false);
    setIsSuccess(true);

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mt-3 mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Have questions about our machinery or services? We're here to help. Reach out to our team for expert advice and support.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-display font-bold text-2xl mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <a 
                  href="https://maps.google.com/?q=Lot+1331,+Kg.+Sungai+Batu,+08100+Merbok,+Kedah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">Address</h3>
                    <p className="text-muted-foreground">
                      Lot 1331, Kg. Sungai Batu,<br />
                      08100 Merbok, Kedah,<br />
                      Malaysia
                    </p>
                  </div>
                </a>

                <a href="tel:+60125882911" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">Phone</h3>
                    <p className="text-muted-foreground">
                      012-588 2911<br />
                      011-1111 2911
                    </p>
                  </div>
                </a>

                <a href="mailto:famox.malaysia@gmail.com" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">Email</h3>
                    <p className="text-muted-foreground">famox.malaysia@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Saturday<br />
                      9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8 p-6 rounded-xl bg-green-500/10 border border-green-500/20">
                <h3 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Quick Response via WhatsApp
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Chat with us directly for faster response during business hours.
                </p>
                <Button variant="default" className="w-full bg-green-600 hover:bg-green-700" asChild>
                  <a href="https://wa.me/60125882911" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>

              {/* Google Rating Badge */}
              <div className="mt-6 p-4 rounded-xl bg-muted/50 border border-border">
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-secondary fill-secondary" />
                    ))}
                  </div>
                  <div>
                    <span className="font-bold">4.8</span>
                    <span className="text-sm text-muted-foreground"> on Google</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card-feature p-8">
                <h2 className="font-display font-bold text-2xl mb-6">Send Us a Message</h2>

                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center mb-4">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h3 className="font-display font-bold text-xl mb-2">Thank You!</h3>
                    <p className="text-muted-foreground mb-6">
                      We've received your message and will respond within 24 hours.
                    </p>
                    <Button 
                      variant="outline"
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          company: '',
                          enquiryType: 'general',
                          message: '',
                        });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+60 12-345 6789"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="enquiryType">Enquiry Type *</Label>
                      <Select
                        value={formData.enquiryType}
                        onValueChange={(value) => setFormData({ ...formData, enquiryType: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select enquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {enquiryTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your requirements, questions, or how we can help..."
                        rows={6}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="xl" 
                      className="w-full sm:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.0!2d100.4!3d5.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwNDgnMDAuMCJOIDEwMMKwMjQnMDAuMCJF!5e0!3m2!1sen!2smy!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Famox Location"
        />
      </section>
    </div>
  );
}
