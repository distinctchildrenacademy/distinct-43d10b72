import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Download, Printer } from "lucide-react";

const EnrollmentForm = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    studentName: "",
    class: "",
    formerSchool: "",
    dateOfBirth: "",
    placeOfBirth: "",
    state: "",
    nationality: "",
    gender: "",
    religion: "",
    residentialAddress: "",
    motherTongue: "",
    medicalChallenge: "",
    hobbies: "",
    motherName: "",
    fatherName: "",
    emailAddress: "",
    phoneNumber: "",
    placeOfWork: "",
    childrenBehaviour: "",
    isMedicallyChallenged: "",
    illnessType: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const printForm = () => {
    if (formRef.current) {
      const printContent = document.createElement('div');
      printContent.innerHTML = `
        <div style="padding: 20px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="/lovable-uploads/61a4741c-66f5-47e6-bb57-4820308482ef.png" style="height: 100px;" />
            <h1 style="color: #1e3a8a; margin-top: 10px;">Registration Form</h1>
          </div>
          
          <div style="margin-bottom: 30px;">
            <h2 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a;">STUDENT'S PROFILE</h2>
            <div style="margin: 10px 0;">
              <strong>Name:</strong> ${formData.studentName}<br>
              <strong>Class:</strong> ${formData.class}<br>
              <strong>Former School:</strong> ${formData.formerSchool}<br>
              <strong>Date of Birth:</strong> ${formData.dateOfBirth}<br>
              <strong>Place of Birth:</strong> ${formData.placeOfBirth}<br>
              <strong>State:</strong> ${formData.state}<br>
              <strong>Nationality:</strong> ${formData.nationality}<br>
              <strong>Gender:</strong> ${formData.gender}<br>
              <strong>Religion:</strong> ${formData.religion}<br>
              <strong>Residential Address:</strong> ${formData.residentialAddress}<br>
              <strong>Mother Tongue:</strong> ${formData.motherTongue}<br>
              <strong>Hobbies:</strong> ${formData.hobbies}
            </div>
          </div>
          
          <div style="margin-bottom: 30px;">
            <h2 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a;">PARENT'S PROFILE</h2>
            <div style="margin: 10px 0;">
              <strong>Mother's Name:</strong> ${formData.motherName}<br>
              <strong>Father's Name:</strong> ${formData.fatherName}<br>
              <strong>Email Address:</strong> ${formData.emailAddress}<br>
              <strong>Phone Number:</strong> ${formData.phoneNumber}<br>
              <strong>Place of Work:</strong> ${formData.placeOfWork}<br>
              <strong>Children's Behaviour:</strong> ${formData.childrenBehaviour}<br>
              <strong>Medically Challenged:</strong> ${formData.isMedicallyChallenged}<br>
              ${formData.isMedicallyChallenged === 'yes' ? `<strong>Type of Illness:</strong> ${formData.illnessType}` : ''}
            </div>
          </div>
          
          <div style="margin-top: 50px;">
            <div style="float: right; width: 200px; text-align: center;">
              <div style="border-top: 1px solid #000;">Signature</div>
            </div>
          </div>
        </div>
      `;

      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>Registration Form</title>
              <style>
                body { font-family: Arial, sans-serif; }
                @media print {
                  body { padding: 20px; }
                }
              </style>
            </head>
            <body>
              ${printContent.innerHTML}
            </body>
          </html>
        `);
        printWindow.document.close();
        setTimeout(() => {
          printWindow.print();
        }, 500);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    printForm();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8" ref={formRef}>
          {/* Form Header */}
          <div className="text-center mb-8">
            <img
              src="/lovable-uploads/61a4741c-66f5-47e6-bb57-4820308482ef.png"
              alt="Distinct Children Academy"
              className="h-24 mx-auto mb-4"
            />
            <h1 className="text-3xl font-bold text-blue-900">Registration Form</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Student's Profile Section */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-blue-800 border-b pb-2">STUDENT'S PROFILE</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="studentName">Name</Label>
                  <Input
                    id="studentName"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="class">Class</Label>
                  <Input
                    id="class"
                    name="class"
                    value={formData.class}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="formerSchool">Former School</Label>
                  <Input
                    id="formerSchool"
                    name="formerSchool"
                    value={formData.formerSchool}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">Date of Birth (DD/MM/YYYY)</Label>
                  <Input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    placeholder="e.g., 01/01/2015"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="placeOfBirth">Place of Birth</Label>
                  <Input
                    id="placeOfBirth"
                    name="placeOfBirth"
                    value={formData.placeOfBirth}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nationality">Nationality</Label>
                  <Input
                    id="nationality"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>Gender</Label>
                  <Select name="gender" onValueChange={(value) => handleSelectChange("gender", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="religion">Religion</Label>
                  <Input
                    id="religion"
                    name="religion"
                    value={formData.religion}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="residentialAddress">Residential Address</Label>
                  <Textarea
                    id="residentialAddress"
                    name="residentialAddress"
                    value={formData.residentialAddress}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="motherTongue">Mother Tongue</Label>
                  <Input
                    id="motherTongue"
                    name="motherTongue"
                    value={formData.motherTongue}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hobbies">Hobbies</Label>
                  <Input
                    id="hobbies"
                    name="hobbies"
                    value={formData.hobbies}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* Parent's Profile Section */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-blue-800 border-b pb-2">PARENT'S PROFILE</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="motherName">Mother's Name</Label>
                  <Input
                    id="motherName"
                    name="motherName"
                    value={formData.motherName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fatherName">Father's Name</Label>
                  <Input
                    id="fatherName"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emailAddress">Email Address</Label>
                  <Input
                    id="emailAddress"
                    name="emailAddress"
                    type="email"
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="placeOfWork">Place of Work</Label>
                  <Input
                    id="placeOfWork"
                    name="placeOfWork"
                    value={formData.placeOfWork}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="childrenBehaviour">Children's Behaviour</Label>
                  <Textarea
                    id="childrenBehaviour"
                    name="childrenBehaviour"
                    value={formData.childrenBehaviour}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Is he/she medically challenged?</Label>
                  <RadioGroup
                    onValueChange={(value) => handleSelectChange("isMedicallyChallenged", value)}
                    className="flex space-x-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no">No</Label>
                    </div>
                  </RadioGroup>
                </div>
                {formData.isMedicallyChallenged === "yes" && (
                  <div className="space-y-2">
                    <Label htmlFor="illnessType">If Yes, what kind of illness</Label>
                    <Input
                      id="illnessType"
                      name="illnessType"
                      value={formData.illnessType}
                      onChange={handleInputChange}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Signature Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Signature</Label>
                <div className="h-20 border-2 border-dashed border-gray-300 rounded-lg"></div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <Button type="button" variant="outline" onClick={printForm}>
                <Printer className="mr-2 h-4 w-4" />
                Print Form
              </Button>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                Submit Form
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EnrollmentForm; 