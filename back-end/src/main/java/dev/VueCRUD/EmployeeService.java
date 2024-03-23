package dev.VueCRUD;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

import java.util.*;

interface EmployeeRepository extends CrudRepository<Employee, Long> {}

@Component
public class EmployeeService {

    private final EmployeeRepository repo;

    public EmployeeService(EmployeeRepository repo) {
        this.repo = repo;
    }

    public Iterable<Employee> getAllEmployees() {
        return repo.findAll();
    }

    public Optional<Employee> getEmployeeById(Long id) {
        return repo.findById(id);
    }

    public Employee addEmployee(Employee employee) {
        return repo.save(employee);
    }

    public Optional<Employee> updateEmployee(Long id, Employee employee) {
        if (repo.existsById(id)) {
            return Optional.of(repo.save(employee));
        }
        else {
            return Optional.empty();
        }
    }

    public void deleteEmployee(Long id) {
        repo.deleteById(id);
    }


}
