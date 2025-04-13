
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

interface InfoCardProps {
  title: string;
  description: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, icon, className = '' }) => {
  return (
    <Card className={`h-full ${className}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        {icon && <div className="text-medical-blue">{icon}</div>}
      </CardHeader>
      <CardContent className="text-sm text-gray-600">
        {description}
      </CardContent>
    </Card>
  );
};

const DiabetesInfoCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <InfoCard
        title="What is Diabetes?"
        description={
          <div className="space-y-2">
            <p>
              Diabetes is a chronic condition that occurs when your body doesn't properly process 
              glucose (blood sugar), either because it doesn't produce enough insulin or because 
              it can't effectively use the insulin it produces.
            </p>
            <div className="pt-2">
              <a 
                href="https://www.cdc.gov/diabetes/basics/diabetes.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-medical-blue hover:text-medical-lightBlue gap-1 text-xs"
              >
                Learn more <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        }
      />
      <InfoCard
        title="Risk Factors"
        description={
          <ul className="list-disc list-inside space-y-1">
            <li>Family history of diabetes</li>
            <li>Overweight or obesity</li>
            <li>Physical inactivity</li>
            <li>Age (risk increases after 45)</li>
            <li>High blood pressure</li>
            <li>Abnormal cholesterol levels</li>
            <li>History of gestational diabetes</li>
          </ul>
        }
      />
      <InfoCard
        title="Preventive Measures"
        description={
          <ul className="list-disc list-inside space-y-1">
            <li>Maintain a healthy weight</li>
            <li>Exercise regularly (at least 30 min/day)</li>
            <li>Eat a balanced diet rich in fruits and vegetables</li>
            <li>Limit processed foods and added sugars</li>
            <li>Monitor blood pressure and cholesterol</li>
            <li>Get regular health check-ups</li>
            <li>Quit smoking and limit alcohol</li>
          </ul>
        }
      />
    </div>
  );
};

export default DiabetesInfoCards;
