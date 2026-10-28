/* SINGLE RESOURCE REGISTRY. Add subjects/topics/files here only; the site builds itself from it.
   files: [ "exact file name.ext", kind ]  kind = notes | quiz | bank | other
   Paths are relative to this site folder, which must sit INSIDE "COMPUTER STUDY GUIDE":
   <subject.folder>/<topic.folder>/<file>.  Subjects without topics are shown as "Pending".
   group (optional, on a topic): a parent name shown above topics that sit in sub-folders.
   documents: files that belong to no subject (for example the exam syllabus). "file" is the
   exact name of a file placed directly inside the COMPUTER STUDY GUIDE folder. */
window.REGISTRY = {
  title: "OAVS TGT Computer Study Guide",
  root: "../",   // where the subject folders are, relative to index.html (parent folder = COMPUTER STUDY GUIDE)
  documents: [
    { name: "Exam syllabus", file: "Computer-Teacher_OAVS_Syllabus.pdf", note: "Official syllabus for the OAVS Computer Teacher exam", action: "View syllabus", color: "#facc15" }
  ],
  subjects: [
    { id: "basic-java", icon: "java", name: "Basic Java", folder: "BASIC_JAVA", topics: [
      { name: "Introduction to JAVA", folder: "Introduction to JAVA", files: [
        ["Introduction_to_JAVA study guide.pdf", "notes"],
        ["Introduction to JAVA qiuirtx.html", "quiz"],
        ["Introduction to JAVA mcq.pdf", "bank"] ] },
      { name: "Programming Concepts of Basic Java", folder: "Programming Concepts of Basic Java", files: [
        ["Programming_Concepts_of_Basic_Java_OAVS_Notes.pdf", "notes"],
        ["Programming_Concepts_of_Basic_Java_MCQ_Quiz.html", "quiz"],
        ["Programming_Concepts_of_Basic_Java_MCQ_QuestionBank.pdf", "bank"] ] },
      { name: "Objects and Classes", folder: "Objects and Classes", files: [
        ["Objects_and_Classes_OAVS_Notes.pdf", "notes"],
        ["OAVS_TGT_Objects_and_Classes_Quiz.html", "quiz"],
        ["OAVS_TGT_Objects_and_Classes_MCQ_Bank.pdf", "bank"] ] },
      { name: "Language Features", folder: "Language Features", files: [
        ["Language_Features_Java_OAVS_Study_Notes.pdf", "notes"],
        ["Oavs tgt computer language features quirtz(1).html", "quiz"],
        ["OAVS_TGT_Computer_Language_Features_MCQ_Bank.pdf", "bank"] ] },
      { name: "Exception Handling", folder: "Exception Handling", files: [
        ["Java_Exception_Handling_Notes.pdf", "notes"],
        ["MCQ_Exception_Handling.html", "quiz"],
        ["OAVS_TGT_Exception_Handling_Question_Bank.pdf", "bank"] ] },
      { name: "Multithreading", folder: "Multithreading", files: [
        ["Multithreading_OAVS_Notes.pdf", "notes"],
        ["OAVS_TGT_Multithreading_MCQ.html", "quiz"],
        ["OAVS_TGT_Multithreading_MCQ_Bank.pdf", "bank"] ] },
      { name: "Abstract Window Toolkit", folder: "Abstract Window Toolkit", files: [
        ["AWT_Study_Notes.pdf", "notes"],
        ["MCQ Exam Prep - AWT, Applets & Java Utilities.html", "quiz"],
        ["Abstract Window Toolkit (AWT),MCQ Bank.pdf", "bank"] ] }
    ]},
    { id: "c-programming", icon: "c", name: "C Programming", folder: "C_Programming", topics: [
      { name: "C Fundamental", folder: "C_Fundamental", files: [
        ["C_Fundamentals_Study_Guide.pdf", "notes"],
        ["mcq_exam_prep_c_fundamentals.html", "quiz"],
        ["oavs_tgt_c_fundamentals_mcq_bank.pdf", "bank"] ] },
      { name: "Built-in operation and functions", folder: "Built-in operation and functions", files: [
        ["Built-in_Operators_and_Functions_in_C_Console_IO.pdf", "notes"],
        ["mcq_exam_prep.html", "quiz"],
        ["Built-in Operators and Functions Mccq bank.pdf", "bank"] ] },
      { name: "Decision and Case Control Structure", folder: "Decision_and_Case_Control_Structure", files: [
        ["Decision_Control_Structures_C.pdf", "notes"],
        ["MCQ_Exam_Prep_Decision_Case_Control.html", "quiz"],
        ["OAVS_TGT MCQ_Exam_Prep_Decision_Case_Control.pdf", "bank"] ] },
      { name: "Loops in C", folder: "Loops_in_C", files: [
        ["Loop_Control_Structures_C.pdf", "notes"],
        ["MCQ_Exam_Prep_Loop_Control_Structure.html", "quiz"],
        ["OAVS_TGT_Loop_Control_Structure_MCQ_Bank.pdf", "bank"] ] },
      { name: "Storage Classes", folder: "Storage_Classes", files: [
        ["Storage_Classes_in_C_Study_Guide.pdf", "notes"],
        ["MCQ_Exam_Prep_Storage_Classes.html", "quiz"],
        ["OAVS_TGT_Storage_Classes_MCQ_Bank.pdf", "bank"] ] },
      { name: "Array", folder: "Array", files: [
        ["Arrays_in_C_Study_Guide.pdf", "notes"],
        ["OAVS_TGT_Arrays_MCQ_Quiz_App.html", "quiz"],
        ["OAVS_TGT_Arrays_MCQ_QuestionBank.pdf", "bank"] ] },
      { name: "Character Strings", folder: "Character_Strings", files: [
        ["character_strings_in_c.pdf", "notes"],
        ["OAVS_TGT_Computer_Science_MCQ_Practice_App.html", "quiz"],
        ["OAVS_TGT_Computer_Science_Character_Strings_MCQ_Question_Bank.pdf", "bank"] ] },
      { name: "Functions", folder: "Functions", files: [
        ["Functions_Complete_Study_Guide.pdf", "notes"],
        ["OAVS_TGT_CS_Functions_MCQ_Quiz.html", "quiz"],
        ["OAVS_TGT_CS_Functions_MCQ_Bank.pdf", "bank"] ] },
      { name: "Pointers", folder: "Pointers", files: [
        ["Pointers_Complete_Study_Guide.pdf", "notes"],
        ["MCQ_Exam_Prep_Pointers.html", "quiz"],
        ["OAVS_TGT_Pointers_MCQ_Bank.pdf", "bank"] ] },
      { name: "Structures", folder: "Structures", files: [
        ["Structures_Complete_Exam_Guide.pdf", "notes"],
        ["OAVS_TGT_Structures_MCQ_Quiz.html", "quiz"],
        ["OAVS_TGT_Structures_MCQ_Question_Bank.pdf", "bank"] ] },
      { name: "Unions", folder: "Unions", files: [
        ["Unions_Complete_Study_Guide.pdf", "notes"],
        ["MCQ_Exam_Prep_Unions.html", "quiz"],
        ["OAVS_TGT_CS_Unions_MCQ_Question_Bank.pdf", "bank"] ] },
      { name: "File based IO", folder: "File based IO", files: [
        ["File_Based_IO_Exam_Guide.pdf", "notes"],
        ["mcq_exam_prep.html", "quiz"],
        ["OAVS_TGT_CS_FileIO_MCQ_QuestionBank.pdf", "bank"] ] },
      { name: "Dynamic memory allocation", folder: "Dynamic_memory_allocation", files: [
        ["Dynamic_Memory_Allocation_and_Memory_Functions.pdf", "notes"],
        ["mcq_exam_prep.html", "quiz"],
        ["OAVS_TGT_CS_MCQ_Bank_Dynamic_Memory_Allocation.pdf", "bank"] ] },
      { name: "Bitwise operators", folder: "Bitwise_operators", files: [
        ["bitwise_operators_notes.pdf", "notes"],
        ["OAVS_TGT_Bitwise_Operators_MCQ_App.html", "quiz"],
        ["OAVS_TGT_Bitwise_Operators_Important_Questions.pdf", "bank"] ] },
      { name: "Other features and Miscellaneous functions", folder: "Other_features_and_Miscellaneous_functions", files: [
        ["Other Features and Miscellaneous Functions - C Programming.pdf", "notes"],
        ["OAVS_TGT_Miscellaneous_Functions_MCQ.html", "quiz"],
        ["OAVS_TGT_Miscellaneous_Functions_MCQ_Bank.pdf", "bank"] ] }
    ]},
    { id: "dbms", icon: "db", name: "Database Management System", folder: "DATA_BASE_MANAGEMENT_SYSTEM", topics: [
      { name: "Introduction", folder: "01_Introduction", files: [
        ["DBMS_Chapter1_Introduction_ShortNotes.pdf", "notes"],
        ["OAVS_TGT_DBMS_Interactive_Quiz.html", "quiz"],
        ["OAVS_TGT_DBMS_Introduction_MCQ_Bank.pdf", "bank"] ] },
      { name: "Modeling Techniques", folder: "02_Modeling_Techniques", files: [
        ["Chapter 2 - Modeling Techniques (Data Models and ERD).pdf", "notes"],
        ["MCQ_Exam_Prep_Modeling_Techniques.html", "quiz"],
        ["OAVS_TGT_CS_Modeling_Techniques_MCQ_Bank.pdf", "bank"] ] },
      { name: "Hierarchical Database", folder: "03_Hierarchical_Database", files: [
        ["Chapter 3 - Hierarchical Database - Short Notes.pdf", "notes"],
        ["OAVS_TGT_Hierarchical_Database_MCQ_Quiz.html", "quiz"],
        ["OAVS_TGT_Hierarchical_Database_MCQ_Question_Bank.pdf", "bank"] ] },
      { name: "Network Database", folder: "04_Network_Database", files: [
        ["Chapter4_Network_Database_Introduction_Short.pdf", "notes"],
        ["OAVS_TGT_Network_Database_Quiz.html", "quiz"],
        ["OAVS_TGT_Network_Database_Introduction_MCQ_Bank.pdf", "bank"] ] },
      { name: "Relational Algebra", folder: "05_Relational_Algebra", files: [
        ["Relational_Algebra_Study_Notes.pdf", "notes"],
        ["OAVS TGT Relational Algebra - Interactive MCQ Quiz.html", "quiz"],
        ["OAVS TGT Computer Science - Relational Algebra MCQ Question Bank.pdf", "bank"] ] },
      { name: "Relational Database", folder: "06_Relational_Database", files: [
        ["Chapter6_Relational_Database_Notes.pdf", "notes"],
        ["MCQ_Exam_Prep_Relational_Database.html", "quiz"],
        ["OAVS_TGT_Relational_Database_MCQ_Bank.pdf", "bank"] ] },
      { name: "Normalisation", folder: "07_Normalisation", files: [
        ["Chapter 7 - Normalisation.pdf", "notes"],
        ["Normalisation_MCQ_Exam_Prep.html", "quiz"],
        ["OAVS_TGT_Normalisation_MCQ_Bank.pdf", "bank"] ] },
      { name: "Integrity Constraints", folder: "08_Integrity_Constraints", files: [
        ["Chapter8_Integrity_Constraints.pdf", "notes"],
        ["MCQ_Integrity_Constraints.html", "quiz"],
        ["OAVS_TGT_Integrity_Constraints_QBank.pdf", "bank"] ] },
      { name: "Recovery Mechanisms", folder: "09_Recovery_Mechanisms", files: [
        ["Chapter 9 - Recovery Mechanisms.pdf", "notes"],
        ["OAVS_Recovery_Mechanisms_MCQ_Quiz.html", "quiz"],
        ["OAVS_TGT_Recovery_Mechanisms_MCQ_Bank_v3.pdf", "bank"] ] },
      { name: "Concurrency Controls", folder: "10_Concurrency_Controls", files: [
        ["Chapter10_Concurrency_Controls_OAVS_TGT.pdf", "notes"],
        ["Concurrency_Controls_MCQ_Quiz.html", "quiz"],
        ["OAVS_TGT_Concurrency_Controls_MCQ_Bank.pdf", "bank"] ] },
      { name: "Distributed Databases", folder: "11_Distributed_Databases", files: [
        ["Distributed_Databases_Chapter11.pdf", "notes"],
        ["OAVS_TGT_DistributedDatabases_11.1_MCQ_Quiz.html", "quiz"],
        ["OAVS_TGT_DistributedDatabases_11.1_MCQ_Bank.pdf", "bank"] ] },
      { name: "Data Warehousing and Data Mining", folder: "12_Data_Warehousing_and_Data_Mining", files: [
        ["Chapter12_DataWarehousing_DataMining.pdf", "notes"],
        ["OAVS_TGT_DW_DM_MCQ_Quiz.html", "quiz"],
        ["OAVS_TGT_DW_DM_MCQ_Bank.pdf", "bank"] ] },
      { name: "SQL Commands", folder: "13_SQL_Commands", files: [
        ["SQL_Commands_Study_Notes.pdf", "notes"],
        ["SQL_Commands_MCQ_Quiz_App.html", "quiz"],
        ["SQL commands MCQ question bank.pdf", "bank"] ] }
    ]},
    { id: "fit", icon: "it", name: "Fundamentals of Information Technology", folder: "Fundamentals of Information Technology", topics: [] },
    { id: "visual-basic", icon: "vb", name: "Visual Basic", folder: "VISUAL_BASIC", topics: [
      { name: "VB Environment", folder: "01_Introduction_to_VB6/VB Environmen", group: "Introduction to VB6", files: [
        ["VB6_Environment_OAVS_Notes.pdf", "notes"],
        ["VB6_MCQ_Practice.html", "quiz"],
        ["VB6_Introduction_OAVS_TGT_MCQ_Bank.pdf", "bank"] ] },
      { name: "VB The language", folder: "01_Introduction_to_VB6/VB The language", group: "Introduction to VB6", files: [
        ["VB_The_Language_OAVS_Notes.pdf", "notes"],
        ["OAVS_TGT_VB6_Language_MCQ_Quiz.html", "quiz"],
        ["OAVS_TGT_VB6_Language_MCQ_Bank.pdf", "bank"] ] },
      { name: "Visual Basic Controls from Toolbox", folder: "01_Introduction_to_VB6/Visual Basic Controls from Toolbox", group: "Introduction to VB6", files: [
        ["VB6_Controls_from_Toolbox_OAVS.pdf", "notes"],
        ["VB6_Controls_MCQ_Quiz.html", "quiz"],
        ["VB6_Controls_MCQ_Bank.pdf", "bank"] ] },
      { name: "Managing Menus", folder: "01_Introduction_to_VB6/Managing Menus", group: "Introduction to VB6", files: [
        ["Managing_Menus_VB6_OAVS.pdf", "notes"],
        ["MCQ_VB6_Managing_Menus Quiz.html", "quiz"],
        ["OAVS_TGT_VB6_Managing_Menus_MCQ_Bank.pdf", "bank"] ] },
      { name: "Validating and Processing User Inputs", folder: "02_Validating_and_Processing_User_Inputs", files: [
        ["Validating_and_Processing_User_Inputs_VB6.pdf", "notes"],
        ["OAVS_TGT_Validating_User_Inputs_MCQ.html", "quiz"],
        ["OAVS_TGT_Validating_User_Inputs_MCQ_Bank.pdf", "bank"] ] },
      { name: "Using Debugging Tools", folder: "03_Using_Debugging_Tools", files: [
        ["Using_Debugging_Tools_VB6.pdf", "notes"],
        ["VB6_Debugging_MCQ_Quiz.html", "quiz"],
        ["VB6_Using_Debugging_Tools_MCQ_Bank.pdf", "bank"] ] },
      { name: "Database Connectivity", folder: "04_Database_Connectivity", files: [
        ["Database_Connectivity_OAVS.pdf", "notes"],
        ["Database_Connectivity_QUIZ.html", "quiz"],
        ["Database_Connectivity_MCQ_Bank.pdf", "bank"] ] }
    ]}
  ]
};
