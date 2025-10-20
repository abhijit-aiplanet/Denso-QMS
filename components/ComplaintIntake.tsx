"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, Calendar, Package, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/Card";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";

interface ComplaintIntakeProps {
  onSubmit: (data: any) => void;
}

export const ComplaintIntake: React.FC<ComplaintIntakeProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    productModel: "SFA2 HVAC Unit",
    partNumber: "CHE-MIDDLE-5042",
    serialNumber: "SFA2-2024-06-15-LOT247",
    defectType: "Helium Leak",
    description: "Customer reported refrigerant leak in HVAC unit after 6 months of operation",
    customer: "Automotive OEM - Plant A",
    reportedDate: "2024-06-15",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-red-500" />
            Customer Complaint Intake
          </CardTitle>
          <CardDescription>
            Enter the details of the quality complaint to initiate root cause analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  Product Model
                </label>
                <Input
                  value={formData.productModel}
                  onChange={(e) =>
                    setFormData({ ...formData, productModel: e.target.value })
                  }
                  placeholder="e.g., SFA2 HVAC Unit"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Part Number
                </label>
                <Input
                  value={formData.partNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, partNumber: e.target.value })
                  }
                  placeholder="e.g., CHE-MIDDLE-5042"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 dark:text-gray-100">Serial Number</label>
                <Input
                  value={formData.serialNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, serialNumber: e.target.value })
                  }
                  placeholder="e.g., SFA2-2024-06-15-LOT247"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 dark:text-gray-100">Defect Type</label>
                <Input
                  value={formData.defectType}
                  onChange={(e) =>
                    setFormData({ ...formData, defectType: e.target.value })
                  }
                  placeholder="e.g., Helium Leak"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 dark:text-gray-100">Customer</label>
                <Input
                  value={formData.customer}
                  onChange={(e) =>
                    setFormData({ ...formData, customer: e.target.value })
                  }
                  placeholder="Customer name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Report Date
                </label>
                <Input
                  type="date"
                  value={formData.reportedDate}
                  onChange={(e) =>
                    setFormData({ ...formData, reportedDate: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-900 dark:text-gray-100">Description</label>
              <Textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Detailed description of the defect"
                rows={4}
              />
            </div>
            <div className="flex justify-end gap-3">
              <Button type="button" variant="outline">
                Save Draft
              </Button>
              <Button type="submit">
                Start Analysis
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

