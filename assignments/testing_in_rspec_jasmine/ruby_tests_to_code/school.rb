class School
  attr_accessor :name, :students

  def initialize(name)
    @name = name
    @students = {}
  end

<<<<<<< HEAD
  def enroll_student(name,gpa)
    @students[name] = gpa
  end

  def grade(name,gpa)
=======
  def enroll_student(name, gpa)
    @students[name] = gpa
  end

  def grade(name, gpa)
>>>>>>> upstream/master
    @students[name] = gpa
  end

  def average_gpa
    @students.values.reduce(:+).to_f / @students.count
  end

  def withdraw_student(name)
    @students.delete(name)
  end
<<<<<<< HEAD
=======

>>>>>>> upstream/master
end
