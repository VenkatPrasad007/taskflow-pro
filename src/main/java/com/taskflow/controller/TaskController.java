package com.taskflow.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.taskflow.dto.request.TaskCreateRequest;
import com.taskflow.dto.request.TaskUpdateRequest;
import com.taskflow.dto.response.TaskResponse;
import com.taskflow.entity.TaskPriority;
import com.taskflow.entity.TaskStatus;
import com.taskflow.service.TaskService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/tasks")
@RequiredArgsConstructor
@Tag(name="Tasks",description="Task Management endpoints")
public class TaskController {

    private final TaskService taskService;

    @Operation(summary = "Create a new task")
    @ApiResponses({
        @ApiResponse(responseCode = "201", description = "Task create sucessfully"),
        @ApiResponse(responseCode = "400", description = "Invalid input data")
    })
    @PostMapping
    public ResponseEntity<TaskResponse> createTask(@Valid @RequestBody TaskCreateRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(taskService.createTask(request));
    }

    @Operation(summary = "Get all tasks", description = "support filtering by status and priority")
    @ApiResponse(responseCode = "200", description = "Tasks retrieved sucesfull")
    @GetMapping
    public ResponseEntity<List<TaskResponse>> getAllTasks(
            @RequestParam(required = false) TaskStatus status,
            @RequestParam(required = false) TaskPriority priority) {

        if (status != null) {
            return ResponseEntity.ok(taskService.getTasksByStatus(status));
        }

        if (priority != null) {
            return ResponseEntity.ok(taskService.getTasksByPriority(priority));
        }

        return ResponseEntity.ok(taskService.getAllTasks());
    }
    
    @Operation(summary = "Get task by ID")
    @ApiResponses({
        @ApiResponse(responseCode = "200", description = "Task found"),
        @ApiResponse(responseCode = "404", description = "Task not found")
    })
    @GetMapping("/{id}")
    public ResponseEntity<TaskResponse> getTaskById(@PathVariable Long id) {
        return ResponseEntity.ok(taskService.getTaskById(id));
    }

    @Operation(summary = "Update a task")
    @PutMapping("/{id}")
    public ResponseEntity<TaskResponse> updateTask(
            @PathVariable Long id,
            @Valid @RequestBody TaskUpdateRequest request) {
        return ResponseEntity.ok(taskService.updateTask(id, request));
    }

    @Operation(summary = "Update task status only")
    @PatchMapping("/{id}/status")
    public ResponseEntity<TaskResponse> updateStatus(
            @PathVariable Long id,
            @RequestParam TaskStatus status) {
        return ResponseEntity.ok(taskService.updateTaskStatus(id, status));
    }

    @Operation(summary = "Delete a task")
    @ApiResponse(responseCode = "204", description = "Task deleted successfully")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
        return ResponseEntity.noContent().build();
    }

}
