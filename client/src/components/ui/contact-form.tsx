import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Send, Shield } from "lucide-react";

export default function ContactForm() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [acceptTerms, setAcceptTerms] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
  });

  const createContactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Demande envoyée avec succès !",
        description: "Nous vous contacterons dans les 24h pour programmer votre audit gratuit.",
      });
      reset();
      setAcceptTerms(false);
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error: any) => {
      toast({
        title: "Erreur lors de l'envoi",
        description: error.message || "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    if (!acceptTerms) {
      toast({
        title: "Conditions requises",
        description: "Veuillez accepter d'être contacté pour continuer.",
        variant: "destructive",
      });
      return;
    }
    createContactMutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">Prénom *</Label>
          <Input
            {...register("firstName")}
            placeholder="Votre prénom"
            className={errors.firstName ? "border-red-500" : ""}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="lastName">Nom *</Label>
          <Input
            {...register("lastName")}
            placeholder="Votre nom"
            className={errors.lastName ? "border-red-500" : ""}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
          )}
        </div>
      </div>
      
      <div>
        <Label htmlFor="email">Email professionnel *</Label>
        <Input
          {...register("email")}
          type="email"
          placeholder="votreemail@entreprise.com"
          className={errors.email ? "border-red-500" : ""}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
      
      <div>
        <Label htmlFor="phone">Téléphone *</Label>
        <Input
          {...register("phone")}
          type="tel"
          placeholder="01 23 45 67 89"
          className={errors.phone ? "border-red-500" : ""}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>
      
      <div>
        <Label htmlFor="sector">Secteur d'activité *</Label>
        <Select onValueChange={(value) => setValue("sector", value)}>
          <SelectTrigger className={errors.sector ? "border-red-500" : ""}>
            <SelectValue placeholder="Sélectionnez votre secteur" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sante">Santé & Médical</SelectItem>
            <SelectItem value="immobilier">Immobilier</SelectItem>
            <SelectItem value="artisanat">Artisanat & BTP</SelectItem>
            <SelectItem value="commerce">Commerce & Retail</SelectItem>
            <SelectItem value="services">Services aux entreprises</SelectItem>
            <SelectItem value="autre">Autre</SelectItem>
          </SelectContent>
        </Select>
        {errors.sector && (
          <p className="text-red-500 text-sm mt-1">{errors.sector.message}</p>
        )}
      </div>
      
      <div>
        <Label htmlFor="challenge">Votre principal défi marketing</Label>
        <Textarea
          {...register("challenge")}
          rows={4}
          placeholder="Décrivez brièvement votre situation actuelle et vos objectifs..."
        />
      </div>
      
      <div className="flex items-start space-x-3">
        <Checkbox
          id="terms"
          checked={acceptTerms}
          onCheckedChange={(checked) => setAcceptTerms(checked === true)}
        />
        <Label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
          J'accepte d'être contacté par RaiseMed.IA concernant mon projet marketing.{" "}
          <a href="#" className="text-primary hover:underline">
            Politique de confidentialité
          </a>
        </Label>
      </div>
      
      <Button
        type="submit"
        disabled={createContactMutation.isPending}
        className="w-full bg-primary text-white hover:bg-blue-700 py-4 text-lg"
      >
        {createContactMutation.isPending ? (
          "Envoi en cours..."
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Recevoir mon audit gratuit
          </>
        )}
      </Button>
      
      <p className="text-center text-sm text-gray-500 flex items-center justify-center">
        <Shield className="mr-1 w-4 h-4" />
        Audit 100% gratuit et sans engagement
      </p>
    </form>
  );
}
