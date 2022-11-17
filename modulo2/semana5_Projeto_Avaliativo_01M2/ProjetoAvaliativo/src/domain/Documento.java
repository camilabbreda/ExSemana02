package domain;
import enums.Status;
public class Documento {
    private static Integer count = 50000;
    private Integer idDocument;
    private Integer idOwner;
    private Integer idCreator;
    public String link;
    public Status status;


    //status arquivado ou ativo


    public Documento( Integer idOwner, Integer idCreator, String link, Status status) {

        this.idDocument = count++;
        this.idOwner = idOwner;
        this.idCreator = idCreator;
        this.link = link;
        this.status = status;
    }

    public Documento(Integer idOwner, String link, Status status) {
        this.idDocument = count++;
        this.idOwner = idOwner;
        this.link = link;
        this.status = status;
    }

    public Documento(){}

    public Integer getIdDocument() {
        return idDocument;
    }

    public Integer getIdOwner() {
        return idOwner;
    }

    public String getLink() {
        return link;
    }

    public Integer getIdCreator(){return idCreator;}
    public Status getStatus() {
        return status;
    }

    public static void setCount(Integer count) {
        Documento.count = count;
    }

    public void setIdDocument(Integer idDocument) {
        this.idDocument = idDocument;
    }

    public void setIdResponsable(Integer idOwner) {
        this.idOwner = idOwner;
    }

    public void setIdOwner(Integer idOwner) {
        this.idOwner = idOwner;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public void setStatus(Status ativo) {
        this.status = status;
    }

    public void setIdCreator(int id) {
        this.idCreator = id;
    }
}
