package com.teamfisk.backend_app.messages;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @NoArgsConstructor @AllArgsConstructor
public class ResponseFile {
    private String name;
    private String url;
    private String type;
    private long size;
    private String id;
}
