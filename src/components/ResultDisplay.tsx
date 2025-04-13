
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowUpRight, ArrowDownRight, AlertCircle } from 'lucide-react';

interface ResultDisplayProps {
  prediction: number | null;
  confidence: number;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ prediction, confidence }) => {
  if (prediction === null) {
    return null;
  }

  const getRiskLevel = (prediction: number) => {
    if (prediction >= 0.7) return 'High';
    if (prediction >= 0.3) return 'Moderate';
    return 'Low';
  };
  
  const getRiskColor = (prediction: number) => {
    if (prediction >= 0.7) return 'text-red-600';
    if (prediction >= 0.3) return 'text-amber-500';
    return 'text-green-600';
  };

  const getResultClass = (prediction: number) => {
    if (prediction >= 0.7) return 'result-glow-warning';
    if (prediction >= 0.3) return 'result-glow-negative';
    return 'result-glow-positive';
  };

  const getIcon = (prediction: number) => {
    if (prediction >= 0.7) return <AlertCircle className="w-8 h-8 text-red-600" />;
    if (prediction >= 0.3) return <ArrowUpRight className="w-8 h-8 text-amber-500" />;
    return <ArrowDownRight className="w-8 h-8 text-green-600" />;
  };

  const riskLevel = getRiskLevel(prediction);
  const riskColor = getRiskColor(prediction);
  const resultClass = getResultClass(prediction);
  const percentageRisk = Math.round(prediction * 100);

  return (
    <Card className={`w-full max-w-md bg-white ${resultClass}`}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium flex items-center justify-between">
          Diabetes Risk Prediction
          {getIcon(prediction)}
        </CardTitle>
        <CardDescription>Based on your provided health metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Risk Level:</span>
              <span className={`text-2xl font-bold ${riskColor}`}>{riskLevel}</span>
            </div>
            <Progress value={percentageRisk} className="h-2.5" 
              style={{
                background: '#e5e7eb',
                '--progress-background': prediction >= 0.7 ? 'rgba(220, 38, 38, 0.8)' : 
                                         prediction >= 0.3 ? 'rgba(245, 158, 11, 0.8)' : 
                                         'rgba(16, 185, 129, 0.8)'
              } as React.CSSProperties} 
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>Low</span>
              <span>Moderate</span>
              <span>High</span>
            </div>
          </div>
          
          <div className="pt-2 border-t border-gray-100">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Prediction Confidence:</span>
              <span className="font-medium">{Math.round(confidence * 100)}%</span>
            </div>
          </div>

          <div className="p-3 bg-gray-50 rounded-md text-sm text-gray-600">
            <p>
              <strong>Note:</strong> This prediction is based on statistical analysis and should not replace professional
              medical advice. Please consult with your healthcare provider about your results.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultDisplay;
