package com.sdadas.scinote.repos.shared.model;

import java.io.Serializable;

/**
 * @author Sławomir Dadas
 */
public class WebLocation implements Serializable {

    private String name;

    private String url;

    public WebLocation() {
    }

    public WebLocation(String name, String url) {
        this.name = name;
        this.url = url;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
