
# DiabeTech Prediction Buddy 🩺

![DiabeTech Banner](https://raw.githubusercontent.com/yourusername/diabetech-prediction-buddy/main/public/diabetech-banner.png)

## 🌟 Overview

DiabeTech Prediction Buddy is an interactive web application designed to help users assess their risk of developing diabetes based on key health metrics. Using a simplified prediction model, the application provides a risk assessment along with educational resources to promote diabetes awareness and prevention.

## 🔍 Features

- **Health Data Input Form**: Easily enter your health metrics including glucose levels, BMI, blood pressure, and more
- **Instant Risk Assessment**: Get immediate feedback on your diabetes risk level
- **Confidence Scoring**: View the statistical confidence of the prediction
- **Risk Visualization**: Clear visual representation of your risk level
- **Educational Resources**: Learn about diabetes, its symptoms, risk factors, and prevention
- **Mobile Responsive Design**: Use on any device with a fully responsive layout

## 🖥️ Demo

Try out the live demo: [DiabeTech Prediction Buddy](https://diabetech.yourdomain.com)

![Application Screenshot](https://raw.githubusercontent.com/yourusername/diabetech-prediction-buddy/main/public/app-screenshot.png)

## 🛠️ Built With

- [React](https://reactjs.org/) - UI building framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety and developer experience
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI component library
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icons
- [Recharts](https://recharts.org/) - Responsive charting library

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/yourusername/diabetech-prediction-buddy.git
   ```

2. Navigate to the project directory
   ```sh
   cd diabetech-prediction-buddy
   ```

3. Install dependencies
   ```sh
   npm install
   # or
   yarn install
   ```

4. Start the development server
   ```sh
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## 🧪 Prediction Model

The application uses a simplified logistic regression model to predict diabetes risk based on the following inputs:

- Number of pregnancies
- Glucose level
- Blood pressure
- Skin thickness
- Insulin level
- BMI (Body Mass Index)
- Diabetes pedigree function (family history)
- Age

The model coefficients are based on common risk factors for Type 2 Diabetes. In a production environment, this would be replaced with a properly trained and validated machine learning model.

## 📊 How Risk Is Calculated

The prediction model:
1. Normalizes the input features
2. Applies the logistic regression formula with our pre-defined coefficients
3. Returns a probability score (0-1) representing diabetes risk
4. Calculates a confidence score for the prediction

Risk levels are categorized as:
- Low: < 30%
- Moderate: 30% - 70%
- High: > 70%

## ⚠️ Disclaimer

This application is for educational purposes only. The predictions are based on statistical models and should not replace professional medical consultation. Always consult with healthcare professionals regarding health concerns.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

Your Name - [@your_twitter](https://twitter.com/your_twitter) - email@example.com

Project Link: [https://github.com/yourusername/diabetech-prediction-buddy](https://github.com/yourusername/diabetech-prediction-buddy)

## 🙏 Acknowledgements

- [Pima Indians Diabetes Dataset](https://www.kaggle.com/datasets/uciml/pima-indians-diabetes-database)
- [World Health Organization - Diabetes Information](https://www.who.int/health-topics/diabetes)
- [American Diabetes Association](https://www.diabetes.org/)
