# **Scoping Document: Find the Greenest Ride for a Sustainable Future!**

## Context & Motivation  
Vehicle **CO₂ emissions** play a crucial role in **environmental policies** and **consumer decisions**. As climate concerns escalate, understanding **emission patterns** across different car brands and models is more important than ever.  

This visualization simplifies **complex emissions data**, making it **accessible** and **insightful** for better decision-making. Whether you're considering an **electric, hybrid, or fuel-efficient** model, our interactive tool helps you **compare CO₂ emissions and make a sustainable choice** without sacrificing performance.  

Start your search today and **reduce your impact on the environment!** 

## Primary Audience & User Tasks
### **Who is the Primary Audience?** 
1️⃣ **Consumers (Car Buyers)** – Comparing cars to find **eco-friendly** and fuel-efficient options.  
2️⃣ **Automobile Manufacturers** – Evaluating and improving their vehicle emissions. 

### **🛠 What Tasks Will They Perform?**
#### 🔹 **Consumers (Car Buyers)**  
- Select a **car model** based on CO₂ emissions and fuel consumption.  
- Compare different manufacturers to find the most **sustainable** option.  
  

#### 🔹 **Automobile Manufacturers**  
  
- Use data insights to design **lower-emission** vehicles.  
- Identify **market trends** and consumer preferences for **eco-friendly** cars.  

---

### ** How Will the Visualization Help Them?**  

**Simplifies Complex Data** – Users can easily compare emissions across brands and models.

**Supports Informed Decision-Making** – Interactive features allow for **quick comparisons**. 


# **Related Work: Inspirations & Comparisons**

## ** FuelEconomy.gov - Green Vehicle Guide**  
🔗 **Website:** [https://www.fueleconomy.gov](https://www.fueleconomy.gov)  

## ** The International Council on Clean Transportation (ICCT) - CO₂ Emissions Report**  
🔗 **Report:** [https://theicct.org/](https://theicct.org/)  
 

---

### ** How These Projects Inspire Us**  
 **FuelEconomy.gov** provides a **detailed database** of fuel efficiency and CO₂ emissions, allowing users to compare different car models.  
 **ICCT Reports** analyze **global vehicle emissions** and fuel efficiency trends, offering insights for policymakers and researchers.  
  

### ** How Our Approach Differs**  
🔹 **Highly Interactive:** Unlike static reports, we enable **dynamic filtering and real-time comparisons**.    
🔹 **Multi-Criteria Analysis:** We compare not just **CO₂ emissions**, but also **fuel consumption and power**, giving a **comprehensive sustainability insight**.  
🔹 **User-Friendly Visualization:** We simplify complex datasets into an **engaging, easy-to-use interactive chart**.  

### ** What Sets Our Project Apart?**   
 **Encourages sustainable choices** by making green vehicle options more accessible!  

 # ** Data Sources & Processing**

## ** Dataset Selection**
We are using **the "sampledataset.csv" dataset**, which contains detailed information about various car models, including:  
- **Brand (Manufacturer)**  
- **Maximum Power (HP)**  
- **Fuel Consumption (L/100km)**  
- **CO₂ Emissions (g/km)**  

This dataset is crucial for analyzing vehicle sustainability by comparing power, efficiency, and environmental impact.

---

## **✅ Strengths & ❌ Limitations of the Dataset**  
### **✅ Strengths:**  
- **Comprehensive:** Covers multiple vehicle brands and models.  
- **Relevant Variables:** Includes **power, fuel consumption, and CO₂ emissions**, essential for evaluating sustainability.  
- **Structured Format:** Available in **CSV**, making it easy to process with Python, Pandas, and D3.js.  

### **❌ Limitations:**  
- **Missing Data:** Some vehicles have **incomplete or missing fields** (e.g., missing power or CO₂ values).  
- **Data Age:** Some records may not reflect the **latest emission standards** or new vehicle models.  
- **Inconsistent Formatting:** Some values may have **different units** or **extra spaces**, requiring cleaning.  

---

## **🔄 Backup Plan if Data is Unavailable**  
If the dataset is incomplete or missing, we plan to:  
- **Simulate missing data** using the **mean values** from similar vehicles.  
- **Use alternative datasets**, such as **FuelEconomy.gov** or **ICCT reports**.  
- **Manually fill gaps** by referencing manufacturer specifications where possible.  

---

## **💾 Data Type & Format**  
- The dataset is in **CSV (Comma-Separated Values)** format.  
- This is an **unstructured format**, but it is easy to parse and process using Python's **Pandas** library.  

---

## **🔍 Exploratory Data Analysis (EDA) & Data Cleaning**  
To ensure high-quality visualization, we performed **EDA** and **data wrangling**:

### **1️⃣ Handling Missing Values**  
- **Dropped rows** with completely missing key parameters (Power, CO₂, Fuel Consumption).  
- **Interpolated values** for partially missing data (e.g., averaging fuel consumption for similar models).  

### **2️⃣ Standardizing Units**  
- Converted any **inconsistent numerical values** to standard units (e.g., removing " kW" from power values).  
- Rounded values for better visualization (e.g., limiting fuel consumption to 1 decimal place).  

### **3️⃣ Filtering Data**  
- We only include **specific manufacturers** for clarity:  
  **Suzuki, Mercedes, Volkswagen, Renault, Alfa Romeo, Chevrolet, Fiat, Ferrari, Volvo, Nissan, BMW, Lexus**.  

### **4️⃣ Detecting Outliers**  
- Used **box plots and histograms** to identify abnormal CO₂ or power values.  
- **Removed extreme outliers** that were likely errors (e.g., 1000+ HP in a standard vehicle).  

---

## **📌 Key Takeaways**
✔️ **Clean and structured data** ensures reliable visualization.  
✔️ **Missing values were handled** using interpolation and removal strategies.  
✔️ **Standardization and filtering** improved readability and accuracy.  
✔️ **Exploratory analysis** helped detect and fix inconsistencies before visualization.  

With this refined dataset, we can now build an **interactive, data-driven visualization** that effectively compares vehicle sustainability. 🚗🌱  


  
