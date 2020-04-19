package com.sdadas.scinote.shared.model.project;

import com.sdadas.scinote.shared.model.paper.PaperId;

import java.io.Serializable;
import java.util.List;
import java.util.Objects;

/**
 * @author Sławomir Dadas
 */
public class ProjectPaper implements Serializable {

    private PaperId id;

    private String notes;

    private List<String> tags;

    private Long added;

    public ProjectPaper(PaperId id) {
        this.id = id;
        this.added = System.currentTimeMillis();
    }

    public ProjectPaper() {
    }

    public PaperId getId() {
        return id;
    }

    public void setId(PaperId id) {
        this.id = id;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public List<String> getTags() {
        return tags;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }

    public Long getAdded() {
        return added;
    }

    public void setAdded(Long added) {
        this.added = added;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProjectPaper that = (ProjectPaper) o;
        return id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
