package service;

import jakarta.ws.rs.core.Response;

public class NotAuthorizedException extends Throwable {
    public NotAuthorizedException(String s) {
        super((s));
    }
}
