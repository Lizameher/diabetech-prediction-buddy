
// This is a simplified model based on logistic regression for diabetes prediction.
// In a real-world scenario, you would use a properly trained and validated ML model.

// Coefficients for our simplified logistic regression model
// These values are based on common risk factors for Type 2 Diabetes
const coefficients = {
  intercept: -5.5,
  pregnancies: 0.1,
  glucose: 0.02,
  bloodPressure: 0.005,
  skinThickness: 0.003,
  insulin: -0.001,
  bmi: 0.09,
  diabetesPedigree: 0.8,
  age: 0.03
};

// Feature scaling parameters (based on the Pima Indians dataset statistics)
const scaling = {
  pregnancies: { mean: 3.8, std: 3.4 },
  glucose: { mean: 120.9, std: 32.0 },
  bloodPressure: { mean: 69.1, std: 19.4 },
  skinThickness: { mean: 20.5, std: 16.0 },
  insulin: { mean: 79.8, std: 115.2 },
  bmi: { mean: 32.0, std: 7.9 },
  diabetesPedigree: { mean: 0.47, std: 0.3 },
  age: { mean: 33.2, std: 11.8 }
};

// Normalize a feature
const normalize = (value: number, feature: keyof typeof scaling) => {
  return (value - scaling[feature].mean) / scaling[feature].std;
};

// Sigmoid function for logistic regression
const sigmoid = (z: number): number => {
  return 1 / (1 + Math.exp(-z));
};

export type HealthMetrics = {
  pregnancies: number;
  glucose: number;
  bloodPressure: number;
  skinThickness: number;
  insulin: number;
  bmi: number;
  diabetesPedigree: number;
  age: number;
};

export interface PredictionResult {
  risk: number;
  confidence: number;
}

// Main prediction function
export const predictDiabetesRisk = (metrics: HealthMetrics): PredictionResult => {
  try {
    // Normalize features
    const normalizedFeatures = {
      pregnancies: normalize(metrics.pregnancies, 'pregnancies'),
      glucose: normalize(metrics.glucose, 'glucose'),
      bloodPressure: normalize(metrics.bloodPressure, 'bloodPressure'),
      skinThickness: normalize(metrics.skinThickness, 'skinThickness'),
      insulin: normalize(metrics.insulin, 'insulin'),
      bmi: normalize(metrics.bmi, 'bmi'),
      diabetesPedigree: normalize(metrics.diabetesPedigree, 'diabetesPedigree'),
      age: normalize(metrics.age, 'age')
    };

    // Calculate linear combination
    let z = coefficients.intercept;
    z += coefficients.pregnancies * normalizedFeatures.pregnancies;
    z += coefficients.glucose * normalizedFeatures.glucose;
    z += coefficients.bloodPressure * normalizedFeatures.bloodPressure;
    z += coefficients.skinThickness * normalizedFeatures.skinThickness;
    z += coefficients.insulin * normalizedFeatures.insulin;
    z += coefficients.bmi * normalizedFeatures.bmi;
    z += coefficients.diabetesPedigree * normalizedFeatures.diabetesPedigree;
    z += coefficients.age * normalizedFeatures.age;

    // Apply sigmoid function to get probability
    const probability = sigmoid(z);

    // Calculate a mock confidence (in a real system, this would come from the model)
    // Higher for extreme probabilities, lower for values around 0.5
    const confidence = 0.75 + (0.2 * Math.abs(probability - 0.5) * 2);

    return {
      risk: probability,
      confidence: confidence > 0.99 ? 0.99 : confidence
    };
  } catch (error) {
    console.error("Error in prediction model:", error);
    return {
      risk: 0,
      confidence: 0
    };
  }
};

// Sample explanation factors - this would typically come from a more complex model
export const getFeatureImportance = (metrics: HealthMetrics): Record<string, number> => {
  const normalizedValues = {
    glucose: normalize(metrics.glucose, 'glucose'),
    bmi: normalize(metrics.bmi, 'bmi'),
    age: normalize(metrics.age, 'age'),
    diabetesPedigree: normalize(metrics.diabetesPedigree, 'diabetesPedigree'),
    bloodPressure: normalize(metrics.bloodPressure, 'bloodPressure')
  };
  
  // Calculate relative importance (simplified)
  const weights: Record<string, number> = {
    glucose: Math.abs(normalizedValues.glucose * coefficients.glucose),
    bmi: Math.abs(normalizedValues.bmi * coefficients.bmi),
    age: Math.abs(normalizedValues.age * coefficients.age),
    diabetesPedigree: Math.abs(normalizedValues.diabetesPedigree * coefficients.diabetesPedigree),
    bloodPressure: Math.abs(normalizedValues.bloodPressure * coefficients.bloodPressure)
  };
  
  // Normalize weights to sum to 1
  const sum = Object.values(weights).reduce((a, b) => a + b, 0);
  Object.keys(weights).forEach(key => {
    weights[key] = weights[key] / sum;
  });
  
  return weights;
};
