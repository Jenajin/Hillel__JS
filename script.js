// ЗАВДАННЯ

// Вам потрібно зробити конструктор сутності "Студент".
// Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість. 
// І є можливість отримати вік студента та його середній бал – це методи.

// Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, 
// але на 25 елементів. Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present() 
// на чергове порожнє місце, в масив записується true, коли викликаємо .absent() - записується false. 
// Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів. 
// Масив – це властивість, present та absent – ​​методи.

// Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять), 
// і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!", 
// якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".

// Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) 
// і показати використання цих методів.


class Students {
    constructor(name, lastName, yearOfBirth, arrEva) {
        this.name = name
        this.lastName = lastName
        this.yearOfBirth = yearOfBirth
        this.arrEva = arrEva
        this.attendance = 26
        this.arrBase = []
    }

    present() {
        if (this.arrBase.length === this.attendance) {
            return this.arrBase
        }
        this.arrBase.push(true)
    }

    absent() {
        if (this.arrBase.length === this.attendance) {
            return this.arrBase
        }
        this.arrBase.push(false)
    }

    age() {
        console.log( `Студенту ${this.name} ${this.lastName} ${2023 - this.yearOfBirth} років`)
    }

    gpa() {
        const average = this.arrEva.reduce((acummulator, item) => acummulator + item) / this.arrEva.length
        this.average = Math.round(average) 
        console.log(`Середня значення оцінки ${this.name} ${this.lastName} складає ${this.average}`) 
    }

    summary() {
        this.counter = 0
        
        for (let el of this.arrBase) {
            if (el === true) {
                this.counter++
            }
        }

        if (this.average > 90 && (this.counter * 100 / this.arrBase.length) > 90) {
            alert('Молодець!')
        } else if (this.average > 90 || this.counter > 3) {
            alert('Добре, але можна краще.')
        } else {
            alert('Редиска!')
        }
    }
}


// Застосування конструкторної сутності "Студент"

// 1 відвідування занять і оцінки на найвищому рівні
const student1 = new Students('Mark', 'Bern', 1984, [100, 87, 100, 100, 100, 92, 100])
student1.age()
student1.gpa()

student1.present()
student1.present()
student1.present()
student1.absent()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()

student1.summary()

console.log(`Молодець`, student1)


// 2 оцінки на найвищому рівні проте відвідування занять на середньому
const student2 = new Students('Jack', 'Gregar', 1994, [100, 87, 50, 50, 100, 100, 100])
student2.age()
student2.gpa()

student2.absent()
student2.absent()
student2.absent()
student2.absent()
student2.present()
student2.present()
student2.present()
student2.present()
student2.present()
student2.present()
student2.present()
student2.present()
student2.present()
student2.present()
student2.present()
student2.present()

student2.summary()

console.log(`Хорошист`, student2)

// 3 погані оцінки та погана відвідуваність
const student3 = new Students('Anton', 'Budnik', 1998, [74, 87, 50, 50, 50, 12, 65])
student3.age()
student3.gpa()
student2.absent()
student2.absent()
student2.absent()
student2.absent()
student2.absent()
student2.absent()
student2.absent()
student2.absent()
student2.absent()
student2.absent()
student2.absent()
student2.absent()
student2.absent()
student2.absent()
student2.absent()
student2.absent()
student2.absent()
student2.absent()
student2.absent()
student2.absent()
student2.absent()
student2.absent()
student2.absent()
student2.absent()
student2.absent()
student2.absent()
student2.absent()
student2.absent()
student2.absent()
student2.absent()
student2.absent()
student2.absent()

student3.summary()

console.log(`Редиска!`, student3)