import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, Send, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useQuoteModal } from '@/contexts/QuoteModalContext';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { data } from '@/data';

const enquiryTypes = [
  { value: 'general', label: 'General Enquiry' },
  { value: 'quote_request', label: 'Request a Quote' },
  { value: 'catalogue_enquiry', label: 'Product Enquiry' },
  { value: 'training', label: 'Training & Consultancy' },
  { value: 'farm_setup', label: 'Farm Setup Services' },
  { value: 'partnership', label: 'Partnership Opportunity' },
];

export default function QuoteModal() {
  const { isOpen, selectedItem, closeModal } = useQuoteModal();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    enquiryType: selectedItem ? 'catalogue_enquiry' : 'quote_request',
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
      itemSlug: (selectedItem as any)?.slug,
    });

    setIsSubmitting(false);
    setIsSuccess(true);

    toast({
      title: "Enquiry Submitted!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset after showing success
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        enquiryType: 'quote_request',
        message: '',
      });
      closeModal();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-xl md:w-full bg-card rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground px-6 py-4 flex items-center justify-between">
              <div>
                <h2 className="font-display font-bold text-xl">Request a Quote</h2>
                {selectedItem && (
                  <p className="text-sm text-primary-foreground/80">
                    Enquiring about: {selectedItem.title}
                  </p>
                )}
              </div>
              <button 
                onClick={closeModal}
                className="p-2 rounded-lg hover:bg-primary-foreground/10 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto flex-1">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center mb-4">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h3 className="font-display font-bold text-xl mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">
                      We've received your enquiry and will respond within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        placeholder="Tell us about your requirements..."
                        rows={4}
                      />
                    </div>

                    {/* File Upload Placeholder */}
                    <div className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:border-primary/50 transition-colors cursor-pointer">
                      <Upload className="h-6 w-6 mx-auto text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Drag & drop files or <span className="text-primary font-medium">browse</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        PDF, DOC, images up to 10MB
                      </p>
                    </div>

                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Submit Enquiry
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      By submitting, you agree to our{' '}
                      <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
