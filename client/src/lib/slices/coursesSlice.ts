import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Course {
  id: string;
  title: string;
  description: string;
  schedule: string;
  price: string;
  level: string;
  category: 'Language' | 'Computer' | 'Programming' | 'Design' | 'Marketing';
}


const initialState: { courses: Course[] } = {
  courses: [
    {
      id: "1",
      title: "دورة تطوير واجهات المستخدم (Front-End) باستخدام React.js",
      description: "تعلم أساسيات React.js لبناء مواقع ويب تفاعلية وحديثة، يشمل المكونات، الحالة، وإدارة البيانات.",
      // schedule: "الثلاثاء والخميس، 7:00 مساءً - 9:00 مساءً (عبر Zoom)",
      schedule: "الثلاثاء والخميس، 7:00 مساءً - 9:00 مساءً (عبر Zoom)",
      price: "$150",
      level: "مبتدئ - حتى متوسط",
      category: 'Programming'
    },
    {
      id: "2",
      title: "دورة تصميم واجهات وتجربة المستخدم (UI/UX)",
      description: "تعلم أساسيات تصميم واجهات المستخدم وتجربة المستخدم، يشمل تصميم تطبيقات ومواقع جذابة وسهلة الاستخدام، مع أدوات التصميم مثل Figma وAdobe XD.",
      schedule: "السبت والأحد، 5:00 مساءً - 7:00 مساءً (عبر Zoom)",
      price: "$120",
      level: "مبتدئ - متوسط",
      category: 'Design'
    },
    {
      id: "3",
      title: "دورة التسويق الإلكتروني",
      description: "تعلم أساسيات التسويق الرقمي، بما يشمل التسويق عبر وسائل التواصل الاجتماعي، تحسين محركات البحث (SEO)، الإعلانات المدفوعة، التسويق بالمحتوى، وتحليل النتائج لزيادة الوصول والمبيعات.",
      schedule: "الثلاثاء والخميس، 5:00 مساءً - 7:00 مساءً (عبر Zoom)",
      price: "$120",
      level: "مبتدئ - متوسط",
      category: 'Marketing'
    },

    {
      id: "4",
      title: "دورة تصميم سوشيال ميديا",
      description: "تعلم تصميم منشورات جذابة واحترافية لمواقع التواصل الاجتماعي مثل فيسبوك، إنستغرام، تويتر، ولينكدإن. الدورة تشمل اختيار الألوان، الخطوط، تنسيق العناصر، واستخدام أدوات التصميم مثل Canva وAdobe Photoshop.",
      schedule: "الأربعاء والجمعة، 6:00 مساءً - 8:00 مساءً (عبر Zoom)",
      price: "$100",
      level: "مبتدئ - متوسط",
      category: 'Design'
    },
    {
      id: "5",
      title: "تطوير تطبيقات الويب الخلفية (Back-End) باستخدام Node.js",
      description: "تعلم أساسيات Node.js لبناء تطبيقات ويب قوية وسريعة، يشمل إنشاء الخوادم، التعامل مع قواعد البيانات، وAPIs.",
      schedule: "الاثنين والأربعاء، 6:00 مساءً - 8:00 مساءً (عبر Zoom)",
      price: "$150",
      level: "مبتدئ - متوسط",
      category: 'Programming'
    },
    {
      id: "7",
      title: "أساسيات تطوير واجهات الويب (Front-End) باستخدام HTML, CSS3 & JavaScript ",
      description: "دورة شاملة لتعلّم أساسيات تطوير واجهات مواقع الويب من الصفر، حيث ستتعرّف على بناء هيكل الصفحات باستخدام HTML، تصميم وتنسيق الواجهات باستخدام CSS3، وإضافة التفاعل والديناميكية للمواقع باستخدام JavaScript، مع تطبيقات عملية ومشاريع حقيقية.",
      schedule: "الثلاثاء والخميس، 6:00 مساءً - 8:00 مساءً (عبر Zoom) ",
      price: "$120",
      level: "مبتدئ",
      category: "Programming"
    }




  ]
};

export const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {}
});

export default coursesSlice.reducer;
