
# DiabeTech Prediction Buddy 🩺

## Overview

DiabeTech Prediction Buddy is an advanced web application designed to help individuals assess their risk of developing diabetes. By analyzing key health metrics through a sophisticated prediction model, the app provides personalized risk assessments and educational resources to promote proactive health management.

## 🌟 Key Features

- **Comprehensive Health Risk Assessment**
  - Input key health metrics like glucose levels, BMI, blood pressure
  - Instant diabetes risk prediction
  - Confidence scoring for prediction accuracy

- **Detailed Risk Visualization**
  - Clear, intuitive risk level representation
  - Breakdown of contributing health factors
  - Interactive health insights

- **Educational Resources**
  - In-depth information about diabetes
  - Prevention strategies
  - Risk factor explanations

## 🔬 Prediction Model

The application utilizes a sophisticated machine learning model based on logistic regression, trained on the Pima Indians Diabetes Dataset. The prediction considers:

- Number of pregnancies
- Glucose level
- Blood pressure
- Skin thickness
- Insulin level
- BMI
- Diabetes pedigree function
- Age

### Risk Categorization
- **Low Risk**: < 30% probability
- **Moderate Risk**: 30% - 70% probability
- **High Risk**: > 70% probability

## 🛠 Tech Stack

- **Frontend**: React with TypeScript
- **UI Framework**: Tailwind CSS
- **State Management**: React Query
- **Charting**: Recharts
- **Icons**: Lucide React
- **Deployment**: Vite

## 🚀 Getting Started

### Prerequisites
- Node.js (v14.0+)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/diabetech-prediction-buddy.git
   ```

2. Navigate to project directory
   ```bash
   cd diabetech-prediction-buddy
   ```

3. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

4. Start development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## 🧪 Running Tests

```bash
npm test
# or
yarn test
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## ⚠️ Disclaimer

This application is for educational purposes. The predictions are statistical models and should not replace professional medical advice. Always consult healthcare professionals regarding health concerns.

## 📊 Data Privacy

- No personal health data is stored
- All calculations happen client-side
- Anonymous, aggregated insights only

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📬 Contact

Your Name - [lizameher38@gmail.com]

## 🙏 Acknowledgements

- [Pima Indians Diabetes Dataset](https://www.kaggle.com/datasets/uciml/pima-indians-diabetes-database)
- [World Health Organization](https://www.who.int/health-topics/diabetes)
- [American Diabetes Association](https://www.diabetes.org/)

---

**Remember**: Your health is your most valuable asset. Stay informed, stay proactive! 💪🏽❤️
