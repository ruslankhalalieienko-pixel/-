// Створюємо змінну averageGrade та присвоюємо їй середню оцінку студента
const averageGrade = 85; // Змініть це значення для перевірки інших умов

// Перевірка рівня успішності за допомогою конструкції if...else
if (averageGrade < 60) {
    console.log("Незадовільно");
} else if (averageGrade <= 70) {
    console.log("Задовільно"); // для оцінок від 60 до 70 включно
} else if (averageGrade <= 80) {
    console.log("Добре");      // для оцінок від 71 до 80 включно
} else if (averageGrade <= 90) {
    console.log("Дуже добре"); // для оцінок від 81 до 90 включно
} else if (averageGrade <= 100) {
    console.log("Відмінно");   // для оцінок від 91 до 100 включно
} else {
    console.log("Введено некоректну оцінку (має бути від 0 до 100)");
}
