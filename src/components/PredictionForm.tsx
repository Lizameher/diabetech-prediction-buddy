
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { toast } from 'sonner';

type FormData = {
  pregnancies: number;
  glucose: number;
  bloodPressure: number;
  skinThickness: number;
  insulin: number;
  bmi: number;
  diabetesPedigree: number;
  age: number;
};

const initialFormData: FormData = {
  pregnancies: 0,
  glucose: 0,
  bloodPressure: 0,
  skinThickness: 0,
  insulin: 0,
  bmi: 0,
  diabetesPedigree: 0,
  age: 0,
};

interface PredictionFormProps {
  onPredict: (data: FormData) => void;
}

const PredictionForm: React.FC<PredictionFormProps> = ({ onPredict }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numValue = parseFloat(value);
    setFormData(prev => ({ ...prev, [name]: isNaN(numValue) ? 0 : numValue }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    const requiredFields: Array<keyof FormData> = [
      'glucose', 'bloodPressure', 'bmi', 'age'
    ];
    
    const missingFields = requiredFields.filter(field => formData[field] <= 0);
    
    if (missingFields.length > 0) {
      toast.error("Please fill in all required fields", {
        description: `Missing: ${missingFields.join(', ')}`,
        position: "top-center",
      });
      return;
    }

    onPredict(formData);
  };

  const handleReset = () => {
    setFormData(initialFormData);
  };

  return (
    <Card className="w-full max-w-2xl form-container bg-white">
      <CardHeader className="bg-medical-lightGray rounded-t-lg border-b border-gray-200">
        <CardTitle className="text-medical-blue">Enter Your Health Data</CardTitle>
        <CardDescription>
          Fill in your health metrics to get a diabetes risk prediction
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="pt-6 grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="pregnancies">Number of Pregnancies</Label>
              <Input
                id="pregnancies"
                name="pregnancies"
                type="number"
                placeholder="0"
                min="0"
                value={formData.pregnancies || ''}
                onChange={handleChange}
                className="border-gray-300"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="glucose" className="after:content-['*'] after:text-red-500 after:ml-1">
                Glucose Level (mg/dL)
              </Label>
              <Input
                id="glucose"
                name="glucose"
                type="number"
                placeholder="70-120"
                min="0"
                value={formData.glucose || ''}
                onChange={handleChange}
                className="border-gray-300"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bloodPressure" className="after:content-['*'] after:text-red-500 after:ml-1">
                Blood Pressure (mm Hg)
              </Label>
              <Input
                id="bloodPressure"
                name="bloodPressure"
                type="number"
                placeholder="80-120"
                min="0"
                value={formData.bloodPressure || ''}
                onChange={handleChange}
                className="border-gray-300"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="skinThickness">
                Skin Thickness (mm)
              </Label>
              <Input
                id="skinThickness"
                name="skinThickness"
                type="number"
                placeholder="20-30"
                min="0"
                value={formData.skinThickness || ''}
                onChange={handleChange}
                className="border-gray-300"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="insulin">
                Insulin (mu U/ml)
              </Label>
              <Input
                id="insulin"
                name="insulin"
                type="number"
                placeholder="0-250"
                min="0"
                value={formData.insulin || ''}
                onChange={handleChange}
                className="border-gray-300"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bmi" className="after:content-['*'] after:text-red-500 after:ml-1">
                BMI (kg/m²)
              </Label>
              <Input
                id="bmi"
                name="bmi"
                type="number"
                step="0.1"
                placeholder="18.5-24.9"
                min="0"
                value={formData.bmi || ''}
                onChange={handleChange}
                className="border-gray-300"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="diabetesPedigree">
                Diabetes Pedigree Function
              </Label>
              <Input
                id="diabetesPedigree"
                name="diabetesPedigree"
                type="number"
                step="0.01"
                placeholder="0.0-2.5"
                min="0"
                value={formData.diabetesPedigree || ''}
                onChange={handleChange}
                className="border-gray-300"
              />
              <p className="text-xs text-gray-500">Family history score</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="age" className="after:content-['*'] after:text-red-500 after:ml-1">
                Age (years)
              </Label>
              <Input
                id="age"
                name="age"
                type="number"
                placeholder="21-99"
                min="0"
                value={formData.age || ''}
                onChange={handleChange}
                className="border-gray-300"
                required
              />
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between border-t border-gray-200 pt-4">
          <Button 
            type="button" 
            variant="outline" 
            onClick={handleReset}
          >
            Reset
          </Button>
          <Button 
            type="submit"
            className="bg-medical-blue hover:bg-medical-lightBlue"
          >
            Predict Risk
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default PredictionForm;
