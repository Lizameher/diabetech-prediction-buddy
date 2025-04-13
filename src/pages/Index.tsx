
import React, { useState } from 'react';
import Header from '@/components/Header';
import PredictionForm from '@/components/PredictionForm';
import ResultDisplay from '@/components/ResultDisplay';
import DiabetesInfoCards from '@/components/InfoCard';
import { predictDiabetesRisk, type HealthMetrics } from '@/utils/predictionModel';
import { AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Index = () => {
  const [prediction, setPrediction] = useState<number | null>(null);
  const [confidence, setConfidence] = useState<number>(0);
  const [showInfo, setShowInfo] = useState<boolean>(true);

  const handlePredict = (data: HealthMetrics) => {
    try {
      // Call the prediction model
      const result = predictDiabetesRisk(data);
      
      // Update state with prediction results
      setPrediction(result.risk);
      setConfidence(result.confidence);
      
      // Show a toast notification
      toast.success("Prediction generated", {
        description: "Your diabetes risk assessment is ready.",
        position: "bottom-right",
      });
      
      // Scroll to results
      setTimeout(() => {
        const resultsElement = document.getElementById('results-section');
        if (resultsElement) {
          resultsElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } catch (error) {
      console.error("Prediction error:", error);
      toast.error("Error generating prediction", {
        description: "There was a problem processing your data. Please try again.",
        position: "bottom-right",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-medical-blue text-white py-16">
          <div className="container text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              DiabeTech Prediction Buddy
            </h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              A simple tool to help you assess your risk of developing diabetes based on your health metrics.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12">
          <div className="container px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Check Your Diabetes Risk</h2>
              <p className="text-gray-600 mt-2">
                Enter your health information below to get a risk assessment
              </p>
            </div>
            
            <div className="flex justify-center">
              <PredictionForm onPredict={handlePredict} />
            </div>
          </div>
        </section>

        {/* Results Section */}
        {prediction !== null && (
          <section id="results-section" className="py-12 bg-medical-lightGray">
            <div className="container px-4">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-gray-900">Your Risk Assessment</h2>
                <p className="text-gray-600 mt-2">
                  Based on the health metrics you provided
                </p>
              </div>
              
              <div className="flex justify-center">
                <ResultDisplay prediction={prediction} confidence={confidence} />
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                  <AlertCircle className="inline-block mr-1 h-4 w-4" />
                  Remember: This is an estimate only. For accurate diagnosis and advice, please consult with a healthcare professional.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Information Section */}
        <section className="py-12">
          <div className="container px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Diabetes Information</h2>
              <Button 
                variant="ghost" 
                className="flex items-center gap-1"
                onClick={() => setShowInfo(!showInfo)}
              >
                {showInfo ? (
                  <>Hide Info <ChevronUp size={16} /></>
                ) : (
                  <>Show Info <ChevronDown size={16} /></>
                )}
              </Button>
            </div>
            
            {showInfo && (
              <DiabetesInfoCards />
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">© 2025 DiabeTech Prediction Buddy. This is for educational purposes only.</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">Terms of Use</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">Contact</a>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500 text-center">
            <p>This application does not provide medical advice. The predictions are based on statistical models and should not replace professional medical consultation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
