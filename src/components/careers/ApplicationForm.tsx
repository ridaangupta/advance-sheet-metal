import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, FileText, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ApplicationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState<{
    resume: File | null;
    coverLetter: File | null;
    certificates: File | null;
  }>({
    resume: null,
    coverLetter: null,
    certificates: null
  });

  const handleFileChange = (fileType: 'resume' | 'coverLetter' | 'certificates', file: File | null) => {
    if (file && file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please select a file smaller than 5MB",
        variant: "destructive",
      });
      return;
    }
    
    setFiles(prev => ({ ...prev, [fileType]: file }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    if (!files.resume) {
      toast({
        title: "Resume required",
        description: "Please upload your resume to continue",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Here we would normally send to the Supabase Edge Function
      // For now, we'll simulate the submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Application submitted!",
        description: "Thank you for your interest. We'll review your application and get back to you soon.",
      });
      
      // Reset form
      (e.target as HTMLFormElement).reset();
      setFiles({ resume: null, coverLetter: null, certificates: null });
      
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const FileUploadSection = ({ 
    fileType, 
    label, 
    required = false 
  }: { 
    fileType: 'resume' | 'coverLetter' | 'certificates'; 
    label: string; 
    required?: boolean; 
  }) => {
    const file = files[fileType];
    
    return (
      <div className="space-y-2">
        <Label className="text-sm font-medium">
          {label} {required && <span className="text-red-500">*</span>}
        </Label>
        <div className="relative">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={(e) => handleFileChange(fileType, e.target.files?.[0] || null)}
          />
          <div className={`border-2 border-dashed rounded-lg p-4 text-center hover:border-gray-400 transition-colors ${
            file ? 'border-gray-400 bg-gray-50' : 'border-gray-300'
          }`}>
            {file ? (
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-gray-600" />
                  <span className="text-sm text-gray-700 truncate">{file.name}</span>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => handleFileChange(fileType, null)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <div className="space-y-2">
                <Upload className="w-8 h-8 text-gray-400 mx-auto" />
                <p className="text-sm text-gray-600">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-500">
                  PDF, DOC, DOCX (Max 5MB)
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="application-form" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Submit Your Application
            </h2>
            <p className="text-xl text-gray-600">
              Ready to join our team? Fill out the form below and we'll get back to you soon.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Application Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" name="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" name="lastName" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" name="phone" type="tel" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" name="address" placeholder="Street, City, Province" />
                </div>

                {/* Position Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Position Applied For *</Label>
                    <Select name="position" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="foreman">Sheet Metal Foreman</SelectItem>
                        <SelectItem value="apprentice">Sheet Metal Apprentice</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Experience Level *</Label>
                    <Select name="experience" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="entry">Entry Level / Apprentice</SelectItem>
                        <SelectItem value="junior">Junior (1-3 years)</SelectItem>
                        <SelectItem value="intermediate">Intermediate (3-7 years)</SelectItem>
                        <SelectItem value="senior">Senior (7+ years)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* File Uploads */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Documents</h3>
                  <FileUploadSection fileType="resume" label="Resume" required />
                  <FileUploadSection fileType="coverLetter" label="Cover Letter" />
                  <FileUploadSection fileType="certificates" label="Certifications & Supporting Documents" />
                </div>

                {/* Additional Information */}
                <div className="space-y-2">
                  <Label htmlFor="additionalInfo">Additional Information</Label>
                  <Textarea 
                    id="additionalInfo" 
                    name="additionalInfo" 
                    placeholder="Tell us about your experience, skills, or anything else you'd like us to know..."
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gray-800 hover:bg-gray-900" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
