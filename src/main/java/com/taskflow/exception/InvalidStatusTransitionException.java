package com.taskflow.exception;

import com.taskflow.entity.TaskStatus;

public class InvalidStatusTransitionException extends RuntimeException {
    public InvalidStatusTransitionException(TaskStatus from, TaskStatus to) {
        super("Cannot transition task status from " + from + " to " + to);
    }
}
