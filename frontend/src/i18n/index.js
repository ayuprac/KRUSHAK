import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      home: 'Home',
      prediction: 'Prediction',
      cropHealth: 'Crop Health',
      
      // Home Page
      title: 'Krushak: Fertilizer Recommendation System',
      subtitle: 'Accurate, data-driven fertilizer recommendations for better yields.',
      startPredicting: 'Start Predicting',
      whyKrushak: 'Why Krushak?',
      accurateRecommendations: 'Accurate Recommendations',
      accurateDesc: 'Powered by multiple ML models.',
      easyToUse: 'Easy to Use',
      easyDesc: 'Simple form, instant results.',
      basedOnData: 'Based on Data',
      dataDesc: 'Built from real-world datasets.',
      whatFarmersSay: 'What Farmers Say',
      
      // Prediction Page
      fertilizerPrediction: 'Fertilizer Prediction',
      temperature: 'Temperature (°C)',
      humidity: 'Humidity (%)',
      moisture: 'Moisture (%)',
      soilType: 'Soil Type',
      cropType: 'Crop Type',
      nitrogen: 'Nitrogen (N)',
      potassium: 'Potassium (K)',
      phosphorus: 'Phosphorus (P)',
      getRecommendation: 'Get Recommendation',
      predicting: 'Predicting...',
      
      // Soil Health
      soilHealthAnalysis: 'Soil Health Analysis',
      healthScore: 'Health Score',
      overallStatus: 'Overall Status',
      insights: 'Insights',
      recommendations: 'Recommendations',
      
      // Weather
      getWeatherData: 'Get Weather Data',
      weatherFor: 'Weather for',
      currentWeather: 'Current Weather',
      
      // Reports
      downloadReport: 'Download Report',
      downloadPDF: 'Download PDF',
      downloadExcel: 'Download Excel',
      
      // Footer
      contactUs: 'Contact Us',
      getRecommendations: 'Get Recommendations',
      
      // Reviews
      review1: 'Krushak helped me cut costs and boost crop health!',
      review2: 'Simple and accurate recommendations. Highly recommended.',
      review3: 'Great UI and actionable suggestions for my fields.',
      
      // Status
      excellent: 'Excellent',
      good: 'Good',
      fair: 'Fair',
      poor: 'Poor',
      
      // About Page
      backToHome: 'Back to Home',
      aboutKrushak: 'About Krushak',
      empoweringFarmers: 'Empowering farmers with AI-driven agricultural insights',
      ourMission: 'Our Mission',
      missionText: 'Krushak is dedicated to revolutionizing agriculture through cutting-edge technology. We provide farmers with intelligent fertilizer recommendations, soil health analysis, and weather insights to maximize crop yields while promoting sustainable farming practices.',
      aiPoweredAnalysis: 'AI-Powered Analysis',
      aiAnalysisText: 'Our advanced machine learning models analyze soil composition, weather patterns, and crop requirements to provide accurate fertilizer recommendations.',
      farmerCentricDesign: 'Farmer-Centric Design',
      farmerCentricText: 'Built with farmers in mind, our platform supports multiple languages and provides intuitive interfaces accessible to users of all technical backgrounds.',
      realTimeInsights: 'Real-Time Insights',
      realTimeText: 'Get instant weather updates, soil health assessments, and personalized recommendations to make informed decisions for your crops.',
      sustainableAgriculture: 'Sustainable Agriculture',
      sustainableText: 'Promote eco-friendly farming practices with optimized fertilizer usage, reducing environmental impact while improving crop productivity.',
      technologyStack: 'Technology Stack',
      machineLearning: 'Machine Learning',
      machineLearningText: 'Decision Tree, Random Forest, Logistic Regression, SVM, Naive Bayes',
      dataSources: 'Data Sources',
      dataSourcesText: 'OpenWeather API, Soil analysis data, Agricultural research datasets',
      languages: 'Languages',
      languagesText: 'English, Hindi, Marathi, Telugu with more coming soon',
      
      // How It Works
      howKrushakWorks: 'How Krushak Works',
      howKrushakWorksDesc: 'Our AI-powered system analyzes your soil data and provides accurate fertilizer recommendations in just three simple steps.',
      enterSoilValues: 'Enter Soil Values',
      enterSoilValuesDesc: 'Input your soil parameters like nitrogen, phosphorus, potassium, temperature, and moisture levels.',
      mlModelsAnalyze: 'ML Models Analyze',
      mlModelsAnalyzeDesc: 'Our advanced machine learning models process your data using Decision Tree, Random Forest, and other algorithms.',
      getRecommendations: 'Get Recommendations',
      getRecommendationsDesc: 'Receive personalized fertilizer recommendations with confidence scores and soil health insights.',
      
      // Weather Widget
      weatherData: 'Weather Data',
      cityName: 'City Name',
      getWeather: 'Get Weather',
      loading: 'Loading...',
      weatherDataUnavailable: 'Weather data unavailable',
      temperature: 'Temperature',
      humidity: 'Humidity',
      condition: 'Condition',
      wind: 'Wind',
      rainfall: 'Rainfall',
      lastHour: 'last hour',
      
      // Enhanced CTA
      readyToGetStarted: 'Ready to Get Started?',
      ctaDescription: 'Choose how you\'d like to experience Krushak\'s powerful fertilizer recommendation system',
      startPredicting: 'Start Predicting',
      startPredictingDesc: 'Enter your soil data and get instant fertilizer recommendations',
      viewDemo: 'View Demo',
      viewDemoDesc: 'See how Krushak works with sample data and explore all features',
      sampleReport: 'Sample Report',
      sampleReportDesc: 'Download a sample PDF report to see the detailed analysis format',
      downloadSample: 'Download Sample',
      allFeaturesFree: 'All features are free to use • No registration required • Instant results'
    }
  },
  hi: {
    translation: {
      // Navigation
      home: 'होम',
      prediction: 'भविष्यवाणी',
      cropHealth: 'फसल स्वास्थ्य',
      
      // Home Page
      title: 'कृषक: उर्वरक सिफारिश प्रणाली',
      subtitle: 'बेहतर उपज के लिए सटीक, डेटा-संचालित उर्वरक सिफारिशें।',
      startPredicting: 'भविष्यवाणी शुरू करें',
      whyKrushak: 'कृषक क्यों?',
      accurateRecommendations: 'सटीक सिफारिशें',
      accurateDesc: 'कई ML मॉडल द्वारा संचालित।',
      easyToUse: 'उपयोग में आसान',
      easyDesc: 'सरल फॉर्म, तुरंत परिणाम।',
      basedOnData: 'डेटा पर आधारित',
      dataDesc: 'वास्तविक दुनिया के डेटासेट से निर्मित।',
      whatFarmersSay: 'किसान क्या कहते हैं',
      
      // Prediction Page
      fertilizerPrediction: 'उर्वरक भविष्यवाणी',
      temperature: 'तापमान (°C)',
      humidity: 'आर्द्रता (%)',
      moisture: 'नमी (%)',
      soilType: 'मिट्टी का प्रकार',
      cropType: 'फसल का प्रकार',
      nitrogen: 'नाइट्रोजन (N)',
      potassium: 'पोटेशियम (K)',
      phosphorus: 'फॉस्फोरस (P)',
      getRecommendation: 'सिफारिश प्राप्त करें',
      predicting: 'भविष्यवाणी कर रहे हैं...',
      
      // Soil Health
      soilHealthAnalysis: 'मिट्टी स्वास्थ्य विश्लेषण',
      healthScore: 'स्वास्थ्य स्कोर',
      overallStatus: 'समग्र स्थिति',
      insights: 'अंतर्दृष्टि',
      recommendations: 'सिफारिशें',
      
      // Weather
      getWeatherData: 'मौसम डेटा प्राप्त करें',
      weatherFor: 'के लिए मौसम',
      currentWeather: 'वर्तमान मौसम',
      
      // Reports
      downloadReport: 'रिपोर्ट डाउनलोड करें',
      downloadPDF: 'PDF डाउनलोड करें',
      downloadExcel: 'Excel डाउनलोड करें',
      
      // Footer
      contactUs: 'संपर्क करें',
      getRecommendations: 'सिफारिशें प्राप्त करें',
      
      // Reviews
      review1: 'कृषक ने मुझे लागत कम करने और फसल स्वास्थ्य बढ़ाने में मदद की!',
      review2: 'सरल और सटीक सिफारिशें। अत्यधिक अनुशंसित।',
      review3: 'बेहतरीन UI और कार्रवाई योग्य सुझाव मेरे खेतों के लिए।',
      
      // Status
      excellent: 'उत्कृष्ट',
      good: 'अच्छा',
      fair: 'ठीक',
      poor: 'खराब',
      
      // About Page
      backToHome: 'होम पर वापस जाएं',
      aboutKrushak: 'कृषक के बारे में',
      empoweringFarmers: 'किसानों को AI-संचालित कृषि अंतर्दृष्टि के साथ सशक्त बनाना',
      ourMission: 'हमारा मिशन',
      missionText: 'कृषक कटिंग-एज तकनीक के माध्यम से कृषि में क्रांति लाने के लिए समर्पित है। हम किसानों को बुद्धिमान उर्वरक सिफारिशें, मिट्टी स्वास्थ्य विश्लेषण, और मौसम अंतर्दृष्टि प्रदान करते हैं ताकि सतत कृषि प्रथाओं को बढ़ावा देते हुए फसल की पैदावार को अधिकतम किया जा सके।',
      aiPoweredAnalysis: 'AI-संचालित विश्लेषण',
      aiAnalysisText: 'हमारे उन्नत मशीन लर्निंग मॉडल मिट्टी की संरचना, मौसम पैटर्न, और फसल की आवश्यकताओं का विश्लेषण करके सटीक उर्वरक सिफारिशें प्रदान करते हैं।',
      farmerCentricDesign: 'किसान-केंद्रित डिजाइन',
      farmerCentricText: 'किसानों को ध्यान में रखकर बनाया गया, हमारा प्लेटफॉर्म कई भाषाओं का समर्थन करता है और सभी तकनीकी पृष्ठभूमि के उपयोगकर्ताओं के लिए सहज इंटरफेस प्रदान करता है।',
      realTimeInsights: 'रियल-टाइम अंतर्दृष्टि',
      realTimeText: 'तत्काल मौसम अपडेट, मिट्टी स्वास्थ्य आकलन, और व्यक्तिगत सिफारिशें प्राप्त करें ताकि अपनी फसलों के लिए सूचित निर्णय ले सकें।',
      sustainableAgriculture: 'सतत कृषि',
      sustainableText: 'पर्यावरणीय प्रभाव को कम करते हुए फसल उत्पादकता में सुधार के लिए अनुकूलित उर्वरक उपयोग के साथ पर्यावरण-अनुकूल कृषि प्रथाओं को बढ़ावा दें।',
      technologyStack: 'तकनीक स्टैक',
      machineLearning: 'मशीन लर्निंग',
      machineLearningText: 'डिसीजन ट्री, रैंडम फॉरेस्ट, लॉजिस्टिक रिग्रेशन, SVM, नेव बेयस',
      dataSources: 'डेटा स्रोत',
      dataSourcesText: 'ओपनवेदर API, मिट्टी विश्लेषण डेटा, कृषि अनुसंधान डेटासेट',
      languages: 'भाषाएं',
      languagesText: 'अंग्रेजी, हिंदी, मराठी, तेलुगु और जल्द ही और भी',
      
      // How It Works
      howKrushakWorks: 'कृषक कैसे काम करता है',
      howKrushakWorksDesc: 'हमारी AI-संचालित प्रणाली आपके मिट्टी डेटा का विश्लेषण करती है और सिर्फ तीन सरल चरणों में सटीक उर्वरक सिफारिशें प्रदान करती है।',
      enterSoilValues: 'मिट्टी मूल्य दर्ज करें',
      enterSoilValuesDesc: 'अपने मिट्टी पैरामीटर जैसे नाइट्रोजन, फॉस्फोरस, पोटेशियम, तापमान, और नमी स्तर दर्ज करें।',
      mlModelsAnalyze: 'ML मॉडल विश्लेषण',
      mlModelsAnalyzeDesc: 'हमारे उन्नत मशीन लर्निंग मॉडल डिसीजन ट्री, रैंडम फॉरेस्ट, और अन्य एल्गोरिदम का उपयोग करके आपके डेटा को प्रोसेस करते हैं।',
      getRecommendations: 'सिफारिशें प्राप्त करें',
      getRecommendationsDesc: 'आत्मविश्वास स्कोर और मिट्टी स्वास्थ्य अंतर्दृष्टि के साथ व्यक्तिगत उर्वरक सिफारिशें प्राप्त करें।',
      
      // Weather Widget
      weatherData: 'मौसम डेटा',
      cityName: 'शहर का नाम',
      getWeather: 'मौसम प्राप्त करें',
      loading: 'लोड हो रहा है...',
      weatherDataUnavailable: 'मौसम डेटा उपलब्ध नहीं',
      temperature: 'तापमान',
      humidity: 'आर्द्रता',
      condition: 'स्थिति',
      wind: 'हवा',
      rainfall: 'वर्षा',
      lastHour: 'पिछले घंटे',
      
      // Enhanced CTA
      readyToGetStarted: 'शुरू करने के लिए तैयार हैं?',
      ctaDescription: 'चुनें कि आप कृषक की शक्तिशाली उर्वरक सिफारिश प्रणाली का अनुभव कैसे करना चाहते हैं',
      startPredicting: 'भविष्यवाणी शुरू करें',
      startPredictingDesc: 'अपना मिट्टी डेटा दर्ज करें और तत्काल उर्वरक सिफारिशें प्राप्त करें',
      viewDemo: 'डेमो देखें',
      viewDemoDesc: 'नमूना डेटा के साथ देखें कि कृषक कैसे काम करता है और सभी सुविधाओं का अन्वेषण करें',
      sampleReport: 'नमूना रिपोर्ट',
      sampleReportDesc: 'विस्तृत विश्लेषण प्रारूप देखने के लिए एक नमूना PDF रिपोर्ट डाउनलोड करें',
      downloadSample: 'नमूना डाउनलोड करें',
      allFeaturesFree: 'सभी सुविधाएं मुफ्त में उपयोग करें • कोई पंजीकरण आवश्यक नहीं • तत्काल परिणाम'
    }
  },
  mr: {
    translation: {
      // Navigation
      home: 'मुख्यपृष्ठ',
      prediction: 'अंदाज',
      cropHealth: 'पिकाचे आरोग्य',
      
      // Home Page
      title: 'कृषक: खत सूचना प्रणाली',
      subtitle: 'चांगल्या उत्पादनासाठी अचूक, डेटा-चालित खत सूचना।',
      startPredicting: 'अंदाज सुरू करा',
      whyKrushak: 'कृषक का?',
      accurateRecommendations: 'अचूक सूचना',
      accurateDesc: 'अनेक ML मॉडेल्सद्वारे चालित।',
      easyToUse: 'वापरण्यात सोपे',
      easyDesc: 'सोपे फॉर्म, त्वरित परिणाम।',
      basedOnData: 'डेटावर आधारित',
      dataDesc: 'वास्तविक जगाच्या डेटासेट्सवरून बनवले।',
      whatFarmersSay: 'शेतकरी काय म्हणतात',
      
      // Prediction Page
      fertilizerPrediction: 'खत अंदाज',
      temperature: 'तापमान (°C)',
      humidity: 'आर्द्रता (%)',
      moisture: 'ओलावा (%)',
      soilType: 'मातीचा प्रकार',
      cropType: 'पिकाचा प्रकार',
      nitrogen: 'नायट्रोजन (N)',
      potassium: 'पोटॅशियम (K)',
      phosphorus: 'फॉस्फरस (P)',
      getRecommendation: 'सूचना मिळवा',
      predicting: 'अंदाज करत आहे...',
      
      // Soil Health
      soilHealthAnalysis: 'माती आरोग्य विश्लेषण',
      healthScore: 'आरोग्य स्कोर',
      overallStatus: 'एकूण स्थिती',
      insights: 'अंतर्दृष्टी',
      recommendations: 'सूचना',
      
      // Weather
      getWeatherData: 'हवामान डेटा मिळवा',
      weatherFor: 'साठी हवामान',
      currentWeather: 'सध्याचे हवामान',
      
      // Reports
      downloadReport: 'अहवाल डाउनलोड करा',
      downloadPDF: 'PDF डाउनलोड करा',
      downloadExcel: 'Excel डाउनलोड करा',
      
      // Footer
      contactUs: 'संपर्क करा',
      getRecommendations: 'सूचना मिळवा',
      
      // Reviews
      review1: 'कृषकने मला खर्च कमी करण्यात आणि पिकाचे आरोग्य वाढवण्यात मदत केली!',
      review2: 'सोपे आणि अचूक सूचना। अत्यंत शिफारस।',
      review3: 'उत्कृष्ट UI आणि माझ्या शेतांसाठी कार्यक्षम सुझाव।',
      
      // Status
      excellent: 'उत्कृष्ट',
      good: 'चांगले',
      fair: 'बरं',
      poor: 'वाईट',
      
      // About Page
      backToHome: 'मुख्यपृष्ठावर परत जा',
      aboutKrushak: 'कृषक बद्दल',
      empoweringFarmers: 'किसानांना AI-चालित शेती अंतर्दृष्टीसह सक्षम करणे',
      ourMission: 'आमचे मिशन',
      missionText: 'कृषक कटिंग-एज तंत्रज्ञानाद्वारे शेतीत क्रांती आणण्यासाठी समर्पित आहे. आम्ही किसानांना बुद्धिमान खत सूचना, माती आरोग्य विश्लेषण, आणि हवामान अंतर्दृष्टी प्रदान करतो जेणेकरून शाश्वत शेती पद्धतींना प्रोत्साहन देताना पिकाची उत्पादकता वाढवता येईल.',
      aiPoweredAnalysis: 'AI-चालित विश्लेषण',
      aiAnalysisText: 'आमचे प्रगत मशीन लर्निंग मॉडेल्स मातीची रचना, हवामान पॅटर्न, आणि पिकाच्या गरजांचे विश्लेषण करून अचूक खत सूचना प्रदान करतात.',
      farmerCentricDesign: 'किसान-केंद्रित डिझाइन',
      farmerCentricText: 'किसानांच्या मनात ठेवून बनवलेले, आमचे प्लॅटफॉर्म अनेक भाषांचे समर्थन करते आणि सर्व तांत्रिक पार्श्वभूमीच्या वापरकर्त्यांसाठी सहज इंटरफेस प्रदान करते.',
      realTimeInsights: 'रिअल-टाइम अंतर्दृष्टी',
      realTimeText: 'तत्काळ हवामान अपडेट्स, माती आरोग्य मूल्यांकन, आणि वैयक्तिकृत सूचना मिळवा जेणेकरून आपल्या पिकांसाठी माहितीपूर्ण निर्णय घेता येतील.',
      sustainableAgriculture: 'शाश्वत शेती',
      sustainableText: 'पर्यावरणीय प्रभाव कमी करताना पिकाची उत्पादकता सुधारण्यासाठी अनुकूलित खत वापरासह पर्यावरण-अनुकूल शेती पद्धतींना प्रोत्साहन द्या.',
      technologyStack: 'तंत्रज्ञान स्टॅक',
      machineLearning: 'मशीन लर्निंग',
      machineLearningText: 'डिसिजन ट्री, रँडम फॉरेस्ट, लॉजिस्टिक रिग्रेशन, SVM, नेव बेयस',
      dataSources: 'डेटा स्रोत',
      dataSourcesText: 'ओपनवेदर API, माती विश्लेषण डेटा, शेती संशोधन डेटासेट',
      languages: 'भाषा',
      languagesText: 'इंग्रजी, हिंदी, मराठी, तेलुगू आणि लवकरच आणखी',
      
      // How It Works
      howKrushakWorks: 'कृषक कसे काम करते',
      howKrushakWorksDesc: 'आमची AI-चालित प्रणाली आपल्या माती डेटाचे विश्लेषण करते आणि फक्त तीन सोप्या चरणांमध्ये अचूक खत सूचना प्रदान करते.',
      enterSoilValues: 'माती मूल्ये प्रविष्ट करा',
      enterSoilValuesDesc: 'आपले माती पॅरामीटर्स जसे की नायट्रोजन, फॉस्फरस, पोटॅशियम, तापमान, आणि ओलावा पातळी प्रविष्ट करा.',
      mlModelsAnalyze: 'ML मॉडेल्स विश्लेषण',
      mlModelsAnalyzeDesc: 'आमचे प्रगत मशीन लर्निंग मॉडेल्स डिसिजन ट्री, रँडम फॉरेस्ट, आणि इतर अल्गोरिदम वापरून आपला डेटा प्रोसेस करतात.',
      getRecommendations: 'सूचना मिळवा',
      getRecommendationsDesc: 'आत्मविश्वास स्कोअर आणि माती आरोग्य अंतर्दृष्टीसह वैयक्तिकृत खत सूचना मिळवा.',
      
      // Weather Widget
      weatherData: 'हवामान डेटा',
      cityName: 'शहराचे नाव',
      getWeather: 'हवामान मिळवा',
      loading: 'लोड होत आहे...',
      weatherDataUnavailable: 'हवामान डेटा उपलब्ध नाही',
      temperature: 'तापमान',
      humidity: 'आर्द्रता',
      condition: 'स्थिती',
      wind: 'वारा',
      rainfall: 'पाऊस',
      lastHour: 'मागील तास',
      
      // Enhanced CTA
      readyToGetStarted: 'सुरु करण्यासाठी तयार आहात?',
      ctaDescription: 'कृषकच्या शक्तिशाली खत सूचना प्रणालीचा अनुभव कसा घ्यायचा ते निवडा',
      startPredicting: 'अंदाज सुरू करा',
      startPredictingDesc: 'आपला माती डेटा प्रविष्ट करा आणि तत्काळ खत सूचना मिळवा',
      viewDemo: 'डेमो पहा',
      viewDemoDesc: 'नमुना डेटासह पहा की कृषक कसे काम करते आणि सर्व वैशिष्ट्यांचा शोध घ्या',
      sampleReport: 'नमुना अहवाल',
      sampleReportDesc: 'तपशीलवार विश्लेषण स्वरूप पाहण्यासाठी नमुना PDF अहवाल डाउनलोड करा',
      downloadSample: 'नमुना डाउनलोड करा',
      allFeaturesFree: 'सर्व वैशिष्ट्ये विनामूल्य वापरा • कोणतेही नोंदणी आवश्यक नाही • तत्काळ परिणाम'
    }
  },
  te: {
    translation: {
      // Navigation
      home: 'హోమ్',
      prediction: 'అంచనా',
      cropHealth: 'పంట ఆరోగ్యం',
      
      // Home Page
      title: 'కృషక్: ఎరువు సిఫార్సు వ్యవస్థ',
      subtitle: 'మెరుగైన దిగుబడికి ఖచ్చితమైన, డేటా-ఆధారిత ఎరువు సిఫార్సులు।',
      startPredicting: 'అంచనా ప్రారంభించండి',
      whyKrushak: 'కృషక్ ఎందుకు?',
      accurateRecommendations: 'ఖచ్చితమైన సిఫార్సులు',
      accurateDesc: 'బహుళ ML మోడళ్లచే నడుపబడుతుంది।',
      easyToUse: 'ఉపయోగించడంలో సులభం',
      easyDesc: 'సరళమైన ఫారమ్, తక్షణ ఫలితాలు।',
      basedOnData: 'డేటాపై ఆధారపడి',
      dataDesc: 'వాస్తవ ప్రపంచ డేటాసెట్ల నుండి నిర్మించబడింది।',
      whatFarmersSay: 'రైతులు ఏమి చెబుతారు',
      
      // Prediction Page
      fertilizerPrediction: 'ఎరువు అంచనా',
      temperature: 'ఉష్ణోగ్రత (°C)',
      humidity: 'తేమ (%)',
      moisture: 'ఆర్ద్రత (%)',
      soilType: 'నేల రకం',
      cropType: 'పంట రకం',
      nitrogen: 'నత్రజని (N)',
      potassium: 'పొటాషియం (K)',
      phosphorus: 'భాస్వరం (P)',
      getRecommendation: 'సిఫార్సు పొందండి',
      predicting: 'అంచనా వేస్తున్నారు...',
      
      // Soil Health
      soilHealthAnalysis: 'నేల ఆరోగ్య విశ్లేషణ',
      healthScore: 'ఆరోగ్య స్కోర్',
      overallStatus: 'మొత్తం స్థితి',
      insights: 'అంతర్దృష్టులు',
      recommendations: 'సిఫార్సులు',
      
      // Weather
      getWeatherData: 'వాతావరణ డేటా పొందండి',
      weatherFor: 'కోసం వాతావరణం',
      currentWeather: 'ప్రస్తుత వాతావరణం',
      
      // Reports
      downloadReport: 'రిపోర్ట్ డౌన్‌లోడ్ చేయండి',
      downloadPDF: 'PDF డౌన్‌లోడ్ చేయండి',
      downloadExcel: 'Excel డౌన్‌లోడ్ చేయండి',
      
      // Footer
      contactUs: 'మమ్మల్ని సంప్రదించండి',
      getRecommendations: 'సిఫార్సులు పొందండి',
      
      // Reviews
      review1: 'కృషక్ నాకు ఖర్చులు తగ్గించడంలో మరియు పంట ఆరోగ్యాన్ని పెంచడంలో సహాయపడింది!',
      review2: 'సరళమైన మరియు ఖచ్చితమైన సిఫార్సులు। అత్యంత సిఫార్సు చేయబడింది।',
      review3: 'అద్భుతమైన UI మరియు నా పొలాలకు చర్యగ్రహించదగిన సూచనలు।',
      
      // Status
      excellent: 'అద్భుతమైన',
      good: 'మంచిది',
      fair: 'సరసమైన',
      poor: 'చెడ్డది',
      
      // About Page
      backToHome: 'హోమ్‌కు తిరిగి వెళ్ళండి',
      aboutKrushak: 'కృషక్ గురించి',
      empoweringFarmers: 'రైతులను AI-ఆధారిత వ్యవసాయ అంతర్దృష్టులతో శక్తివంతం చేయడం',
      ourMission: 'మా లక్ష్యం',
      missionText: 'కృషక్ కట్టింగ్-ఎడ్జ్ టెక్నాలజీ ద్వారా వ్యవసాయంలో విప్లవం తీసుకురావడానికి అంకితమైనది. మేము రైతులకు తెలివైన ఎరువు సిఫార్సులు, నేల ఆరోగ్య విశ్లేషణ, మరియు వాతావరణ అంతర్దృష్టులను అందిస్తాము, ఇది స్థిరమైన వ్యవసాయ పద్ధతులను ప్రోత్సహిస్తూ పంట దిగుబడిని గరిష్టీకరించడానికి సహాయపడుతుంది.',
      aiPoweredAnalysis: 'AI-ఆధారిత విశ్లేషణ',
      aiAnalysisText: 'మా అధునాతన మెషిన్ లెర్నింగ్ మోడళ్లు నేల కూర్పు, వాతావరణ నమూనాలు, మరియు పంట అవసరాలను విశ్లేషించి ఖచ్చితమైన ఎరువు సిఫార్సులను అందిస్తాయి.',
      farmerCentricDesign: 'రైతు-కేంద్రీకృత డిజైన్',
      farmerCentricText: 'రైతులను మనస్సులో ఉంచుకొని నిర్మించబడిన, మా ప్లాట్‌ఫారమ్ బహుళ భాషలకు మద్దతు ఇస్తుంది మరియు అన్ని సాంకేతిక నేపథ్యాల వినియోగదారులకు సహజమైన ఇంటర్‌ఫేస్‌లను అందిస్తుంది.',
      realTimeInsights: 'రియల్-టైమ్ అంతర్దృష్టులు',
      realTimeText: 'తక్షణ వాతావరణ నవీకరణలు, నేల ఆరోగ్య అంచనాలు, మరియు వ్యక్తిగతీకరించిన సిఫార్సులను పొందండి, తద్వారా మీ పంటల కోసం సమాచార-ఆధారిత నిర్ణయాలు తీసుకోవచ్చు.',
      sustainableAgriculture: 'స్థిరమైన వ్యవసాయం',
      sustainableText: 'పర్యావరణ ప్రభావాన్ని తగ్గిస్తూ పంట ఉత్పాదకతను మెరుగుపరచడానికి ఆప్టిమైజ్ చేసిన ఎరువు వినియోగంతో పర్యావరణ-స్నేహపూర్వక వ్యవసాయ పద్ధతులను ప్రోత్సహించండి.',
      technologyStack: 'టెక్నాలజీ స్టాక్',
      machineLearning: 'మెషిన్ లెర్నింగ్',
      machineLearningText: 'డెసిజన్ ట్రీ, రాండమ్ ఫారెస్ట్, లాజిస్టిక్ రిగ్రెషన్, SVM, నైవ్ బేయస్',
      dataSources: 'డేటా వనరులు',
      dataSourcesText: 'ఓపెన్‌వెదర్ API, నేల విశ్లేషణ డేటా, వ్యవసాయ పరిశోధన డేటాసెట్‌లు',
      languages: 'భాషలు',
      languagesText: 'ఇంగ్లీష్, హిందీ, మరాఠీ, తెలుగు మరియు త్వరలో మరిన్ని',
      
      // How It Works
      howKrushakWorks: 'కృషక్ ఎలా పనిచేస్తుంది',
      howKrushakWorksDesc: 'మా AI-ఆధారిత వ్యవస్థ మీ నేల డేటాను విశ్లేషిస్తుంది మరియు కేవలం మూడు సాధారణ దశలలో ఖచ్చితమైన ఎరువు సిఫార్సులను అందిస్తుంది.',
      enterSoilValues: 'నేల విలువలను నమోదు చేయండి',
      enterSoilValuesDesc: 'మీ నేల పారామితులను నమోదు చేయండి: నత్రజని, భాస్వరం, పొటాషియం, ఉష్ణోగ్రత, మరియు తేమ స్థాయి.',
      mlModelsAnalyze: 'ML మోడళ్లు విశ్లేషణ',
      mlModelsAnalyzeDesc: 'మా అధునాతన మెషిన్ లెర్నింగ్ మోడళ్లు డెసిజన్ ట్రీ, రాండమ్ ఫారెస్ట్, మరియు ఇతర అల్గోరిథమ్‌లను ఉపయోగించి మీ డేటాను ప్రాసెస్ చేస్తాయి.',
      getRecommendations: 'సిఫార్సులు పొందండి',
      getRecommendationsDesc: 'విశ్వాస స్కోర్‌లు మరియు నేల ఆరోగ్య అంతర్దృష్టులతో వ్యక్తిగతీకరించిన ఎరువు సిఫార్సులను పొందండి.',
      
      // Weather Widget
      weatherData: 'వాతావరణ డేటా',
      cityName: 'నగరం పేరు',
      getWeather: 'వాతావరణం పొందండి',
      loading: 'లోడ్ అవుతోంది...',
      weatherDataUnavailable: 'వాతావరణ డేటా అందుబాటులో లేదు',
      temperature: 'ఉష్ణోగ్రత',
      humidity: 'తేమ',
      condition: 'స్థితి',
      wind: 'గాలి',
      rainfall: 'వర్షపాతం',
      lastHour: 'గత గంట',
      
      // Enhanced CTA
      readyToGetStarted: 'ప్రారంభించడానికి సిద్ధంగా ఉన్నారా?',
      ctaDescription: 'కృషక్ యొక్క శక్తివంతమైన ఎరువు సిఫార్సు వ్యవస్థను ఎలా అనుభవించాలనుకుంటున్నారో ఎంచుకోండి',
      startPredicting: 'అంచనా ప్రారంభించండి',
      startPredictingDesc: 'మీ నేల డేటాను నమోదు చేయండి మరియు తక్షణ ఎరువు సిఫార్సులను పొందండి',
      viewDemo: 'డెమో చూడండి',
      viewDemoDesc: 'నమూనా డేటాతో కృషక్ ఎలా పనిచేస్తుందో చూడండి మరియు అన్ని లక్షణాలను అన్వేషించండి',
      sampleReport: 'నమూనా నివేదిక',
      sampleReportDesc: 'వివరణాత్మక విశ్లేషణ ఫార్మాట్ చూడటానికి నమూనా PDF నివేదికను డౌన్‌లోడ్ చేయండి',
      downloadSample: 'నమూనా డౌన్‌లోడ్ చేయండి',
      allFeaturesFree: 'అన్ని లక్షణాలు ఉచితంగా ఉపయోగించండి • నమోదు అవసరం లేదు • తక్షణ ఫలితాలు'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
